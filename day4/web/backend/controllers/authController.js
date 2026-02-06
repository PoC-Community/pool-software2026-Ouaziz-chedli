const { cpSync } = require("fs");
const prisma = require("../config/db");
const bcrypt = require("bcrypt");
const {
  generateToken,
  generateRefreshToken,
  verifyToken,
  verifyRefreshToken,
} = require("../config/auth");

const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email and password are required." });
    }
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (user) {
      return res.status(400).json({ error: "User already exists." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        email: email,
        password_hash: hashedPassword,
        name: name || null,
      },
    });
    return res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error while registering user." });
  }
};

const login = async (req, res) => {
  try {
    console.log("Login request body:", req.body);
    const { email, password } = req.body;
    if (!email || !password) {
      console.log("Missing fields - email:", email, "password:", password);
      return res
        .status(400)
        .json({ error: "Email and password are required." });
    }
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      return res.status(400).json({ error: "User not found." });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid password." });
    }
    const token = generateToken(user.id);
    const refreshToken = generateRefreshToken(user.id);
    return res
      .status(200)
      .json({ message: "User logged in successfully.", token, refreshToken });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error while logging in user." });
  }
};

const refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res.status(400).json({ error: "Refresh token is required." });
    }
    const decodedToken = verifyRefreshToken(refreshToken);
    if (!decodedToken) {
      return res.status(401).json({ error: "Invalid refresh token." });
    }
    const user = await prisma.user.findUnique({
      where: {
        id: decodedToken.userId,
      },
    });
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    const newToken = generateToken(user.id);
    return res.status(200).json({
      message: "Access token generated successfully.",
      token: newToken,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error while refreshing token." });
  }
};

module.exports = {
  register,
  login,
  refreshToken,
};

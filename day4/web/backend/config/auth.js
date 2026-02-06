const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET;
const refreshSecretKey = process.env.JWT_REFRESH_SECRET;

const generateToken = (userId) => {
  return jwt.sign({ userId }, secretKey, {
    expiresIn: "1h",
  });
};

const generateRefreshToken = (userId) => {
  return jwt.sign({ userId }, refreshSecretKey, {
    expiresIn: "7d",
  });
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    return null;
  }
};

const verifyRefreshToken = (token) => {
  try {
    return jwt.verify(token, refreshSecretKey);
  } catch (error) {
    return null;
  }
};

module.exports = {
  generateToken,
  generateRefreshToken,
  verifyToken,
  verifyRefreshToken,
};

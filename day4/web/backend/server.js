require("dotenv").config();
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const tasksRouter = require("./routes/tasks");
const authRouter = require("./routes/auth");

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true }));

// Custom error logging middleware
app.use((req, res, next) => {
  const originalSend = res.send;
  const originalJson = res.json;

  res.send = function (data) {
    if (res.statusCode >= 400) {
      console.error(
        `[ERROR] ${req.method} ${req.originalUrl} - Status: ${res.statusCode} - Response: ${data}`,
      );
    }
    originalSend.call(this, data);
  };

  res.json = function (data) {
    if (res.statusCode >= 400) {
      console.error(
        `[ERROR] ${req.method} ${req.originalUrl} - Status: ${res.statusCode} - Response:`,
        JSON.stringify(data, null, 2),
      );
    }
    originalJson.call(this, data);
  };

  next();
});

// log only 4xx and 5xx responses to console
app.use(
  morgan("dev", {
    skip: function (req, res) {
      return res.statusCode < 400;
    },
  }),
);

// log all requests to access.log
app.use(
  morgan("common", {
    stream: fs.createWriteStream(path.join(__dirname, "access.log"), {
      flags: "a",
    }),
  }),
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// --- ROUTES ---
app.use("/api/tasks", tasksRouter);
app.use("/api/auth", authRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

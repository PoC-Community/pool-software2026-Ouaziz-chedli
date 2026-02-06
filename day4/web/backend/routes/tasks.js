const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const {
  taskIdMiddleware,
  titleMiddleware,
} = require("../middlewares/taskMiddlewares");
const { authMiddleware } = require("../middlewares/authMiddlewares");

router.get("/", authMiddleware, taskController.getAllTasks);
router.get("/search", authMiddleware, taskController.searchTasks);
router.get("/stats", authMiddleware, taskController.getStats);
router.get(
  "/:id",
  authMiddleware,
  taskIdMiddleware,
  taskController.getTaskById,
);
router.post("/", authMiddleware, titleMiddleware, taskController.createTask);
router.put(
  "/:id",
  authMiddleware,
  taskIdMiddleware,
  titleMiddleware,
  taskController.updateTask,
);
router.delete(
  "/:id",
  authMiddleware,
  taskIdMiddleware,
  taskController.deleteTask,
);

module.exports = router;

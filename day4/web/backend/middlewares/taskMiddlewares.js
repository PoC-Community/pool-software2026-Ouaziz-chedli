const taskIdMiddleware = (req, res, next) => {
  const taskId = req.params.id;

  if (!taskId) {
    return res.status(400).json({ error: "Task id is required." });
  }
  if (isNaN(parseInt(taskId))) {
    return res.status(400).json({ error: "Task id is not a number." });
  }
  next();
};

const titleMiddleware = (req, res, next) => {
  const taskTitle = req.body.title;

  if (!taskTitle) {
    return res.status(400).json({ error: "Task title is required." });
  }
  if (taskTitle.length > 200) {
    return res.status(400).json({ error: "Task title is too long." });
  }
  next();
};

module.exports = {
  taskIdMiddleware,
  titleMiddleware,
};
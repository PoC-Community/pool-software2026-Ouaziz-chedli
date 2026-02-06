const prisma = require("../config/db");

const getAllTasks = async (req, res) => {
  let queryOptions = {
    where: {
      userId: req.userId,
    },
  };

  if (req.query.completed !== undefined) {
    queryOptions.where.completed = req.query.completed === "true";
  }

  if (req.query.sortBy !== undefined) {
    const validFields = ["createdAt", "title"];

    if (validFields.includes(req.query.sortBy)) {
      if (req.query.order !== undefined) {
        const order = req.query.order === "desc" ? "desc" : "asc";
        queryOptions.orderBy = {
          [req.query.sortBy]: order,
        };
      } else {
        queryOptions.orderBy = {
          [req.query.sortBy]: "asc",
        };
      }
    }
  } else if (req.query.order !== undefined) {
    queryOptions.orderBy = {
      createdAt: req.query.order === "desc" ? "desc" : "asc",
    };
  }

  const limit = parseInt(req.query.limit) || undefined;
  const offset = parseInt(req.query.offset) || 0;
  queryOptions.take = limit;
  queryOptions.skip = offset;

  try {
    const result = await prisma.task.findMany(queryOptions);
    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des tâches." });
  }
};

const searchTasks = async (req, res) => {
  let queryOptions = {
    where: {
      userId: req.userId,
    },
  };

  if (req.query.q !== undefined) {
    queryOptions.where.title = {
      contains: req.query.q,
      mode: "insensitive",
    };
  }

  try {
    const result = await prisma.task.findMany(queryOptions);
    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des tâches." });
  }
};

const getStats = async (req, res) => {
  try {
    const totalTasks = await prisma.task.count({
      where: { userId: req.userId },
    });
    const completedTasks = await prisma.task.count({
      where: { userId: req.userId, completed: true },
    });
    const pendingTasks = totalTasks - completedTasks;
    const completionPercentage =
      totalTasks > 0 ? ((completedTasks / totalTasks) * 100).toFixed(2) : 0;

    const stats = {
      totalTasks,
      completedTasks,
      pendingTasks,
      completionPercentage: parseFloat(completionPercentage),
    };

    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors du calcul des statistiques." });
  }
};

const getTaskById = async (req, res) => {
  let queryOptions = {
    where: {
      id: parseInt(req.params.id),
      userId: req.userId,
    },
  };

  try {
    const result = await prisma.task.findUnique(queryOptions);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération de la tâche." });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await prisma.task.create({
      data: {
        title: req.body.title,
        userId: req.userId,
      },
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la création de la tâche." });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await prisma.task.findFirst({
      where: { id: parseInt(req.params.id), userId: req.userId },
    });
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    const updatedTask = await prisma.task.update({
      where: { id: parseInt(req.params.id) },
      data: {
        title: req.body.title,
      },
    });
    res.status(200).json(updatedTask);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la mise à jour de la tâche." });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await prisma.task.findFirst({
      where: { id: parseInt(req.params.id), userId: req.userId },
    });
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    const deletedTask = await prisma.task.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.status(200).json(deletedTask);
  } catch (error) {
    res.status(404).json({ error: "Task not found" });
  }
};

// en fait ça crée une "structure"
module.exports = {
  getAllTasks,
  searchTasks,
  getStats,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};

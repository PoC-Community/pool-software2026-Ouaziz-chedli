const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
var morgan = require("morgan");
const cors = require("cors");
const { error } = require("console");
const { Interface } = require("readline");
const PORT = 3000;
app.use(cors()); // Enable CORS for all routesapp.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middlewares  /////////////////////

// Simple middleware function
const taskIdMiddlleware = (req, res, next) => {
  const taskId = req.params.id;

  if (!taskId) {
    return res.status(400).json({ error: "Task id is required." });
  }
  if (isNaN(parseInt(taskId))) {
    return res.status(400).json({ error: "Task id is not a number." });
  }
  next(); // Call next() to continue to the next middleware/route
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

const taskExistsMiddleware = (req, res, next) => {
  const taskId = req.params.id;

  if (!tasks.find((t) => t.id === taskId)) {
    return res.status(404).json({ error: "Task does not exist." });
  }
};

////////////////////////////////////

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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

var tasks = [
  {
    id: 1,
    title: "Buy groceries",
    completed: false,
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-15T10:30:00Z",
  },
  {
    id: 2,
    title: "Clean the house",
    completed: false,
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-15T10:30:00Z",
  },
  {
    id: 3,
    title: "Finish the project",
    completed: false,
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-15T10:30:00Z",
  },
];

app.get("/api/tasks", (req, res) => {
  let result = [...tasks];

  if (req.query.completed != undefined) {
    const isCompleted = req.query.completed === "true";
    result = result.filter((t) => {
      t.completed === isCompleted;
    });
  }
  if (req.query.sortBy) {
    const sortBy = req.query.sortBy;
    const validFields = ["createdAt", "title"];

    if (validFields.includes(sortBy)) {
      result.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
        return 0;
      });
    }
  }
  if (req.query.order === "desc") {
    result.reverse();
  }
  // Pagination
  const limit = parseInt(req.query.limit) || result.length;
  const offset = parseInt(req.query.offset) || 0;
  result = result.slice(offset, offset + limit);

  res.status(200).json(result);
});

app.get("/api/tasks/search", (req, res) => {
  let result = [...tasks];

  if (req.query.q !== undefined) {
    const q = req.query.q.toLowerCase();
    result = result.filter(
      (t) => t.title.toLowerCase().includes(q), // Partial match, case-insensitive
    );
  }

  res.status(200).json(result);
});

app.get("/api/tasks/:id", taskIdMiddlleware, (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    res.status(200).res.json(task);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
});

app.post("/api/tasks", titleMiddleware, (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put(
  "/api/tasks/:id",
  taskIdMiddlleware,
  taskExistsMiddleware,
  (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskTitle = req.body.title;
    var task = tasks.find((t) => t.id === taskId);
    task.title = taskTitle;
    task.updatedAt = new Date().toISOString();
    res.status(200).json(task);
  },
);

app.delete(
  "/api/tasks/:id",
  taskIdMiddlleware,
  taskExistsMiddleware,
  (req, res) => {
    const taskId = parseInt(req.params.id);
    const index = tasks.findIndex((t) => t.id === taskId);
    tasks.splice(index, 1); // supprime la tâche trouvée
    res.status(204).send();
  },
);

// Add this route to calculate and return stats
app.get("/api/tasks/stats", (req, res) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
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
});

// 2xx - Succès

// 200 : OK - Requête réussie
// 201 : Created - Ressource créée (POST)
// 204 : No Content - Succès sans contenu à retourner
// 3xx - Redirection

// 301 : Moved Permanently - Redirection permanente
// 302 : Found - Redirection temporaire
// 304 : Not Modified - Ressource non modifiée
// 4xx - Erreur Client

// 400 : Bad Request - Requête invalide
// 401 : Unauthorized - Authentification requise
// 403 : Forbidden - Accès refusé
// 404 : Not Found - Ressource introuvable
// 409 : Conflict - Conflit (ex: doublon)
// 5xx - Erreur Serveur

// 500 : Internal Server Error - Erreur serveur
// 503 : Service Unavailable - Service indisponible

"use client";

import { useEffect, useState } from "react";
import { Task } from "../generated/prisma/client";
import { useRouter } from "next/navigation";
import { Card, CardBody, CardHeader } from "./Card";
import { useAuthFetch } from "../hooks/useAuthFetch";

function TaskItem({ task }: { task: Task }) {
  return (
    <div className="p-4 bg-zinc-800 rounded-lg mb-3 border border-zinc-700 hover:border-zinc-600 transition-all duration-200 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-zinc-100 mb-2">
            {task.title}
          </h3>
          <p className="text-sm text-zinc-400">
            {new Date(task.createdAt).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            task.completed
              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
              : "bg-zinc-700 text-zinc-300 border border-zinc-600"
          }`}
        >
          {task.completed ? "✓ Complété" : "En cours"}
        </span>
      </div>
    </div>
  );
}

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const authFetch = useAuthFetch();

  useEffect(() => {
    authFetch("http://localhost:3000/api/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data); // TypeScript vérifiera que 'data' correspond bien au type Task !
        setLoading(false);
      })
      .catch((error: unknown) => {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      });
  }, [authFetch]);

  return (
    <Card>
      <CardHeader className="mb-1.5 self-center">Tasks</CardHeader>
      <CardBody>
        {loading == true && (
          <h3 className="text-zinc-400 text-center py-8">Chargement...</h3>
        )}
        {!loading &&
          tasks.map((task) => <TaskItem key={task.id} task={task}></TaskItem>)}
      </CardBody>
    </Card>
  );
}

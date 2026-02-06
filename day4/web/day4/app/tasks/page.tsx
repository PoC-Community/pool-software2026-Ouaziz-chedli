// app/tasks/page.tsx
import ProtectedRoute from "../components/ProtectedRoute";
import TaskList from "../components/TaskList";
import LogoutButton from "../components/LogoutButton";

export default function TasksPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-zinc-900 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-zinc-100">Mes Tâches</h1>
            <LogoutButton />
          </div>
          <TaskList />
        </div>
      </div>
    </ProtectedRoute>
  );
}

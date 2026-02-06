"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Rediriger automatiquement vers /tasks
    // Le middleware s'occupera de rediriger vers /auth/Login si pas authentifié
    router.push("/tasks");
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950">
      <div className="text-zinc-400">Redirection...</div>
    </div>
  );
}

// app/components/ProtectedRoute.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Vérifier si le token existe dans les cookies
    const checkAuth = () => {
      const cookies = document.cookie.split(";");
      const accessToken = cookies.find((cookie) =>
        cookie.trim().startsWith("accessToken="),
      );

      if (!accessToken) {
        // Pas de token, rediriger vers login
        router.push("/auth/Login");
      } else {
        // Token trouvé, autoriser l'accès
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [router]);

  // Afficher un loader pendant la vérification
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-zinc-900">
        <div className="text-zinc-400">Chargement...</div>
      </div>
    );
  }

  // Si authentifié, afficher le contenu
  return isAuthenticated ? <>{children}</> : null;
}

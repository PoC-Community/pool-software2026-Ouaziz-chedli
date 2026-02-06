// app/components/LogoutButton.tsx
"use client";

import { useRouter } from "next/navigation";
import { logout } from "../utils/cookies";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/auth/Login");
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200"
    >
      Déconnexion
    </button>
  );
}

// app/hooks/useAuthFetch.ts
"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function useAuthFetch() {
  const router = useRouter();

  const authFetch = useCallback(
    async (url: string, options?: RequestInit) => {
      try {
        const response = await fetch(url, {
          ...options,
          credentials: "include",
        });

        if (response.status === 401) {
          document.cookie =
            "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          document.cookie =
            "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

          router.push("/auth/login");
          throw new Error("Unauthorized - redirecting to login");
        }

        return response;
      } catch (error) {
        if (error) {
          console.error("Network error:", error);
        }
        throw error;
      }
    },
    [router],
  );

  return authFetch;
}

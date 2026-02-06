// app/utils/cookies.ts

/**
 * Récupère la valeur d'un cookie par son nom
 */
export function getCookie(name: string): string | null {
  const cookies = document.cookie.split(";");
  const cookie = cookies.find((c) => c.trim().startsWith(`${name}=`));

  if (!cookie) return null;

  return cookie.split("=")[1];
}

/**
 * Définit un cookie avec des options
 */
export function setCookie(name: string, value: string, days: number = 7): void {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);

  document.cookie = `${name}=${value}; path=/; expires=${expirationDate.toUTCString()}`;
}

/**
 * Supprime un cookie
 */
export function deleteCookie(name: string): void {
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
}

/**
 * Vérifie si l'utilisateur est authentifié
 */
export function isAuthenticated(): boolean {
  return getCookie("accessToken") !== null;
}

/**
 * Déconnecte l'utilisateur en supprimant tous les tokens
 */
export function logout(): void {
  deleteCookie("accessToken");
  deleteCookie("refreshToken");
}

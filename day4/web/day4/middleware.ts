import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Récupérer le token depuis les cookies
  const accessToken = request.cookies.get("accessToken")?.value;

  // Définir les routes publiques (qui ne nécessitent pas d'authentification)
  const publicPaths = ["/auth/login", "/auth/register"];
  const isPublicPath = publicPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path),
  );

  // Si l'utilisateur n'a pas de token et essaie d'accéder à une route protégée
  if (!accessToken && !isPublicPath) {
    // Rediriger vers la page de login
    const loginUrl = new URL("/auth/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // OPTIONNEL : Décommentez ces lignes si vous voulez empêcher l'accès à /auth/login quand déjà connecté
  // if (accessToken && isPublicPath) {
  //   // Rediriger vers la page des tâches
  //   const tasksUrl = new URL("/tasks", request.url);
  //   return NextResponse.redirect(tasksUrl);
  // }

  return NextResponse.next();
}

// Configurer les routes sur lesquelles le middleware doit s'exécuter
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from './lib/auth'

export async function middleware(request: NextRequest) {
  // Gérer l'authentification avec Better Auth
  const session = await auth.api.getSession({
    headers: request.headers
  })

  // Routes protégées qui nécessitent une authentification
  const protectedRoutes = ['/user_dashboard']
  const isProtectedRoute = protectedRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  )

  // Si c'est une route protégée et qu'il n'y a pas de session, rediriger vers sign-in
  if (isProtectedRoute && !session?.user) {
    const signInUrl = new URL('/auth/sign-in', request.url)
    return NextResponse.redirect(signInUrl)
  }

  // Gérer CORS pour les requêtes API
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const response = NextResponse.next()
    
    // Autoriser les origines
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    
    // Gérer les requêtes preflight OPTIONS
    if (request.method === 'OPTIONS') {
      return new NextResponse(null, { status: 200, headers: response.headers })
    }
    
    return response
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/api/:path*',
    '/user_dashboard/:path*',
    '/auth/:path*'
  ],
} 
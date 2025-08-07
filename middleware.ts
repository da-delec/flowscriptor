import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Routes protégées qui nécessitent une authentification
  const protectedRoutes = ['/user_dashboard']
  const isProtectedRoute = protectedRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  )

  // Pour les routes protégées, on laisse le layout gérer l'authentification
  // car le middleware ne peut pas utiliser Prisma côté client
  if (isProtectedRoute) {
    // On laisse passer la requête, le layout vérifiera la session
    return NextResponse.next()
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
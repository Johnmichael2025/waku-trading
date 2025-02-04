import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { ADMINS } from './constants/admins.constant'
import { isAdminPortal, isClientPortal } from './utils/is-portal'

const protectedRoutes = ['/client-portal', '/admin-portal']
const publicRoutes = ['/login', '/sign-up']

export default async function middleware(req: NextRequest) {

  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route))
  const isPublicRoute = publicRoutes.includes(path)

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (isProtectedRoute) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.nextUrl))
    } else {
      if (isAdminPortal(path) && !ADMINS.includes(token.email || '')) {
        return NextResponse.redirect(new URL('/client-portal', req.nextUrl))
      }
      if (isClientPortal(path) && ADMINS.includes(token.email || '')) {
        return NextResponse.redirect(new URL('/admin-portal', req.nextUrl))
      }
    }
    
  }

  if (
    isPublicRoute &&
    token
  ) {
    const portalUrl = ADMINS.includes(token.email || '') ? '/admin-portal' : '/client-portal'
    return NextResponse.redirect(new URL(portalUrl, req.nextUrl))
  }

  return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth' // Adjusted import path

export async function middleware(req: NextRequest) {
  const session = await auth() // Get session using the auth() function from NextAuth

  const pathname = req.nextUrl.pathname

  // If trying to access protected dashboard routes without a session, redirect to login
  if (!session && pathname.startsWith('/dash')) {
    const newUrl = new URL('/login', req.nextUrl.origin)
    return NextResponse.redirect(newUrl)
  }

  // If trying to access login page with an active session, redirect to dashboard
  if (session && pathname === '/login') {
    const newUrl = new URL('/dash', req.nextUrl.origin)
    return NextResponse.redirect(newUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // requires authentication
    '/dash/:path*',

    // Does NOT require authentication but have related logic in middleware
    '/login',
  ],
}

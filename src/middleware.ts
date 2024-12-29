import { auth } from './lib/auth'

export default auth(req => {
  const pathname = req.nextUrl.pathname
  // Redirect to login page if not authenticated
  if (!req.auth && pathname !== '/login') {
    const newUrl = new URL('/login', req.nextUrl.origin)
    return Response.redirect(newUrl)
  } else if (req.auth) {
    // Redirect to dashboard if already logged in
    if (pathname === '/login') {
      const newUrl = new URL('/dash', req.nextUrl.origin)
      return Response.redirect(newUrl)
    }
  }
})

export const config = {
  matcher: [
    // requires authentication
    '/dash/:path*',

    // Does NOT require authentication but have related logic in middleware
    '/login',
  ],
}

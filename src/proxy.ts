export default function proxy() {}

/**
 * Clerk middleware
 */
// import { clerkMiddleware } from '@clerk/nextjs/server'
// import { NextResponse } from 'next/server'

// const isProtectedRoute = createRouteMatcher(['/dash(.*)'])

// export default clerkMiddleware(async (auth, req) => {
//   if (req.nextUrl.pathname === '/login') {
//     const { userId } = await auth()
//     if (userId) {
//       return NextResponse.redirect(new URL('/', req.url))
//     }
//   }

//   if (isProtectedRoute(req)) {
//     const { isAuthenticated } = await auth()
//     if (!isAuthenticated) {
//       return NextResponse.redirect(new URL('/', req.url))
//     }
//   }
// })

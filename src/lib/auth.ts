import 'server-only'
// import { auth, currentUser } from '@clerk/nextjs/server'

export async function getAuthToken() {
  throw new Error('Not implemented')
  // return (await (await auth()).getToken({ template: 'convex' })) ?? undefined
}

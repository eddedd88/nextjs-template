import { auth } from '@clerk/nextjs/server'

export async function getAuthToken() {
  const session = await auth()
  return (await session.getToken({ template: 'convex' })) ?? undefined
}

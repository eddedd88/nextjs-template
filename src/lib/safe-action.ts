import { createSafeActionClient } from 'next-safe-action'
import { UNEXPECTED_ERROR_MESSAGE } from '../constants'
import { PublicError } from './public-error'
// import { auth } from '@clerk/nextjs/server'
// import { ConvexError } from 'convex/values'

export const safeAction = createSafeActionClient({
  defaultValidationErrorsShape: 'flattened',
  handleServerError(e) {
    console.error(e)
    // if (e instanceof ConvexError) {
    //   return e.data
    // }
    if (e instanceof PublicError) {
      return e.message
    }
    return UNEXPECTED_ERROR_MESSAGE
  },
}).use(async ({ next }) => {
  console.log('Not yet implemented auth check, skipping...')
  const session = { userId: 'fake-user-id' }
  // const session = await auth()
  if (!session.userId) {
    throw new Error('Session is not valid')
  }
  return next({
    ctx: {
      user: {
        id: session.userId,
      },
    },
  })
})

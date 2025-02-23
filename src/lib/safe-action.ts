import { createSafeActionClient } from 'next-safe-action'
import { auth } from './auth'
import { UNEXPECTED_ERROR_MESSAGE } from '../constants'

/**
 * Custom error class to be used in actions to
 * display a custom error message to the user
 */
export class ActionError extends Error {}

export const safeAction = createSafeActionClient({
  defaultValidationErrorsShape: 'flattened',
  handleServerError(e) {
    console.error(e)
    if (e instanceof ActionError) {
      return e.message
    }
    return UNEXPECTED_ERROR_MESSAGE
  },
}).use(async ({ next, ctx }) => {
  const session = await auth()
  if (!session?.user?.id || !session?.user?.email) {
    throw new Error('Session is not valid')
  }
  return next({
    ctx: {
      user: {
        id: session.user.id,
        email: session.user.email,
      },
    },
  })
})

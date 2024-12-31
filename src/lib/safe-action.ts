import { createSafeActionClient } from 'next-safe-action'
import { auth } from './auth'
import { UNEXPECTED_ERROR_MESSAGE } from '../constants'

export const safeAction = createSafeActionClient({
  defaultValidationErrorsShape: 'flattened',
  handleServerError(e) {
    console.error(e)
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

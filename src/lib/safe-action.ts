import { createSafeActionClient } from 'next-safe-action'
import { UNEXPECTED_ERROR_MESSAGE } from '../constants'
import { PublicError } from './public-error'

export const safeAction = createSafeActionClient({
  defaultValidationErrorsShape: 'flattened',
  handleServerError(e) {
    console.error(e)
    if (e instanceof PublicError) {
      return e.message
    }
    return UNEXPECTED_ERROR_MESSAGE
  },
}).use(async ({ next }) => {
  console.log('Not yet implemented auth check, skipping...')
  const session = { userId: 'user-123' }
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

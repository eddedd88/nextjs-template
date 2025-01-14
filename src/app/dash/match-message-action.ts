'use server'

import { matchAction } from '@/lib/ai'
import { userActions } from './user-actions'
import { z } from 'zod'
import { createSafeActionClient } from 'next-safe-action'
import { UNEXPECTED_ERROR_MESSAGE } from '@/constants'

const safeActionWithoutAuth = createSafeActionClient({
  defaultValidationErrorsShape: 'flattened',
  handleServerError(e) {
    console.error(e)
    return UNEXPECTED_ERROR_MESSAGE
  },
})

export const matchMessageAction = safeActionWithoutAuth
  .schema(
    z.object({
      message: z.string().min(1, 'Please enter a message'),
    }),
  )
  .action(async ({ parsedInput: { message } }) => {
    const response = await matchAction({ message, allActions: userActions })
    const matchedAction = userActions.find(
      action => action.id === response.actionId,
    )
    return matchedAction
  })

'use server'

import { matchAction } from '@/lib/ai'
import { userActions } from './user-actions'
import { safeAction } from '@/lib/safe-action'
import { z } from 'zod'

export const matchMessageAction = safeAction
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

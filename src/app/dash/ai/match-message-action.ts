'use server'

import { matchAction } from '@/lib/ai'
import { actions } from './user-actions'
import { redirect } from 'next/navigation'
import { safeAction } from '@/lib/safe-action'
import { z } from 'zod'

export const matchMessageAction = safeAction
  .schema(
    z.object({
      message: z.string().min(1, 'Please enter a message'),
    }),
  )
  .action(async ({ parsedInput: { message } }) => {
    const response = await matchAction({ message, allActions: actions })
    const matchedAction = actions.find(
      action => action.id === response.actionId,
    )
    if (matchedAction?.url) {
      redirect(matchedAction.url)
    }
    return { success: false }
  })

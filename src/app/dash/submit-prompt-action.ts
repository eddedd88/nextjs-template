'use server'

import { z } from 'zod'
import { safeAction } from '@/lib/safe-action'

export const submitPromptAction = safeAction
  .inputSchema(
    z.object({
      message: z.string().min(1, 'Please enter a message'),
    }),
  )
  .action(async ({ parsedInput: { message } }) => {
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('Received message:', message)
    return {
      message: 'Functionality not implemented yet',
    }
  })

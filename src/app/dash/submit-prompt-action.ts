'use server'

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

export const submitPromptAction = safeActionWithoutAuth
  .inputSchema(
    z.object({
      message: z.string().min(1, 'Please enter a message'),
    }),
  )
  .action(async ({ parsedInput: { message } }) => {
    await new Promise(resolve => setTimeout(resolve, 1500))
    return {
      message: 'Functionality not implemented yet',
    }
  })

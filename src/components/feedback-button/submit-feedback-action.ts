'use server'

import { safeAction } from '@/lib/safe-action'
import { z } from 'zod'

export const submitFeedbackAction = safeAction
  .schema(
    z.object({
      message: z.string().min(1, 'Please enter your feedback'),
    }),
  )
  .action(async ({ parsedInput: { message } }) => {
    // TODO: Implement your own feedback storage logic here
    // Example: Save to your preferred database, send to an API, etc.
    console.log('Feedback received:', message)
  })

'use server'

import { prisma } from '@/lib/db/prisma'
import { safeAction } from '@/lib/safe-action'
import { z } from 'zod'

export const submitFeedbackAction = safeAction
  .schema(
    z.object({
      message: z.string().min(1, 'Please enter your feedback'),
    }),
  )
  .action(async ({ parsedInput: { message } }) => {
    await prisma.feedback.create({
      data: {
        message,
      },
    })
  })

'use server'

import { prisma } from '@/lib/db/prisma'
import { z } from 'zod'

const schema = z.object({
  message: z.string().min(1, 'Please enter your feedback'),
})

export async function submitFeedbackAction(formData: FormData) {
  const message = formData.get('message')
  const validatedFields = schema.safeParse({ message })

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors.message?.[0] }
  }

  await prisma.feedback.create({
    data: {
      message: validatedFields.data.message,
    },
  })

  return { success: true }
}

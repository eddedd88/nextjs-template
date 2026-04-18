import { formErrorMessage } from '@/constants'
import { z } from 'zod'

export const SampleFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, formErrorMessage.required('name'))
    .max(80, formErrorMessage.maxLength(80)),
  description: z
    .string()
    .trim()
    .min(10, formErrorMessage.minLength(10))
    .max(500, formErrorMessage.maxLength(500)),
})

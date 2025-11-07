import 'server-only'
import { z } from 'zod'
import { extractMissingEnvErrors } from './extract-missing-env-errors'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
})

const parsedEnv = envSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
})

if (parsedEnv.error) {
  throw new Error(extractMissingEnvErrors(parsedEnv.error))
}

export const serverEnv = parsedEnv.data

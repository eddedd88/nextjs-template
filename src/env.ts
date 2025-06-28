import { z } from 'zod'
import 'server-only'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
})

const parsedEnv = envSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
})

if (parsedEnv.error) {
  const errors = Object.entries(parsedEnv.error.flatten().fieldErrors)
    .map(([field, errors]) => ` ${field}: ${errors?.join(', ')}`)
    .join('\n')
  throw new Error('Missing or invalid environment variables:\n' + errors)
}

export const env = parsedEnv.data

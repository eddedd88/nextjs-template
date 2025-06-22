import { z } from 'zod'
import 'server-only'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  GOOGLE_VERTEX_PROJECT: z.string(),
  GOOGLE_PRIVATE_KEY: z.string(),
  GOOGLE_CLIENT_EMAIL: z.string(),
})

const parsedEnv = envSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
  GOOGLE_VERTEX_PROJECT: process.env.GOOGLE_VERTEX_PROJECT,
  GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
  GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL,
})

if (parsedEnv.error) {
  const errors = Object.entries(parsedEnv.error.flatten().fieldErrors)
    .map(([field, errors]) => ` ${field}: ${errors?.join(', ')}`)
    .join('\n')
  throw new Error('Missing or invalid environment variables:\n' + errors)
}

export const env = parsedEnv.data

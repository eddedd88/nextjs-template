import { z } from 'zod'
import 'server-only'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  // DATABASE_URL: z.string().url(),
  // DATABASE_DIRECT_URL: z.string().url(),
  // AUTH_SECRET: z.string(),
  // AUTH_GOOGLE_ID: z.string(),
  // AUTH_GOOGLE_SECRET: z.string(),
  GOOGLE_VERTEX_PROJECT: z.string(),
  GOOGLE_PRIVATE_KEY: z.string(),
  GOOGLE_CLIENT_EMAIL: z.string(),
})

const parsedEnv = envSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
  // DATABASE_URL: process.env.DATABASE_URL,
  // DATABASE_DIRECT_URL: process.env.DATABASE_DIRECT_URL,
  // AUTH_SECRET: process.env.AUTH_SECRET,
  // AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
  // AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
  GOOGLE_VERTEX_PROJECT: process.env.GOOGLE_VERTEX_PROJECT,
  GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
  GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL,
})

if (parsedEnv.error) {
  const errors = Object.entries(parsedEnv.error.flatten().fieldErrors)
    .map(([field, errors]) => ` - ${field}: ${errors?.join(', ')}`)
    .join('\n')
  throw new Error('Invalid environment variables:\n' + errors)
}

export const env = parsedEnv.data

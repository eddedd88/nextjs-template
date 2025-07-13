import { z } from 'zod'
import { throwMissingEnvError } from './throw-missing-env-error'

const EnvSchema = z.object({
  // Define your client-side environment variables here,
  // they should be prefixed with NEXT_PUBLIC_, for example:
  // NEXT_PUBLIC_API_KEY: z.string().min(1),
})

const parsedEnv = EnvSchema.safeParse({
  // populate the environment variables from process.env, for example:
  // NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
})

if (parsedEnv.error) {
  throwMissingEnvError(parsedEnv.error)
}

export const clientEnv = parsedEnv.data

import { z } from 'zod'
import { throwMissingEnvError } from './throw-missing-env-error'

const EnvSchema = z.object({
  // Define your client-side environment variables here,
  // they must be prefixed with NEXT_PUBLIC_, for example:
  // NEXT_PUBLIC_API_KEY: z.string().min(1),
})

const parsedEnv = EnvSchema.safeParse({
  // populate the environment variables from process.env, for example:
  // NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
})

const invalidEnvKeys = Object.keys(EnvSchema.keyof().enum).filter(
  key => !key.startsWith('NEXT_PUBLIC_'),
)
if (invalidEnvKeys.length > 0) {
  throw new Error(
    'All client-side environment variables must be prefixed with "NEXT_PUBLIC_"' +
      `\nInvalid environments variables found:\n  ${invalidEnvKeys.join('\n  ')}\n`,
  )
}

if (parsedEnv.error) {
  throwMissingEnvError(parsedEnv.error)
}

export const clientEnv = parsedEnv.data

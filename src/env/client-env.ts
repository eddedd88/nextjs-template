import { z } from 'zod'
import { extractMissingEnvErrors } from './extract-missing-env-errors'

/**
 * Define your client-side environment variables here,
 * they must be prefixed with NEXT_PUBLIC_, for example:
 */
const EnvSchema = z.object({})

/**
 * Populate the environment variables from process.env, for example:
 */
const parsedEnv = EnvSchema.safeParse({})

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
  throw new Error(extractMissingEnvErrors(parsedEnv.error))
}

export const clientEnv = parsedEnv.data

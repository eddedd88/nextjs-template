import { z } from 'zod'
import { extractMissingEnvErrors } from './extract-missing-env-errors'

/**
 * Define your client-side environment variables here,
 * they must be prefixed with NEXT_PUBLIC_
 */
const EnvSchema = z.object({
  // NEXT_PUBLIC_CONVEX_URL: z.string().min(1),
})

/**
 * Populate the environment variables from process.env,
 */
const parsedEnv = EnvSchema.safeParse({
  // NEXT_PUBLIC_CONVEX_URL: process.env.NEXT_PUBLIC_CONVEX_URL,
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
  throw new Error(extractMissingEnvErrors(parsedEnv.error))
}

export const clientEnv = parsedEnv.data

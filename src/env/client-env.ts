import { z } from 'zod'
import { extractMissingEnvErrors } from './extract-missing-env-errors'

/**
 * Define your client-side environment variables here,
 * they must be prefixed with NEXT_PUBLIC_, for example:
 */
const EnvSchema = z.object({
  // Convex configuration
  // NEXT_PUBLIC_CONVEX_URL: z.url(),
  // NEXT_PUBLIC_CLERK_FRONTEND_API_URL: z.url(),
  // Clerk configuration
  // NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  // NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string().min(1),
})

/**
 * Populate the environment variables from process.env, for example:
 */
const parsedEnv = EnvSchema.safeParse({
  // NEXT_PUBLIC_CONVEX_URL: process.env.NEXT_PUBLIC_CONVEX_URL,
  // NEXT_PUBLIC_CLERK_FRONTEND_API_URL: process.env.NEXT_PUBLIC_CLERK_FRONTEND_API_URL,
  // NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  // NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
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

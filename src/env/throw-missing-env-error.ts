import { ZodError, flattenError } from 'zod'

export function throwMissingEnvError<T extends Record<string, unknown>>(
  error: ZodError<T>,
) {
  const errors = Object.entries(flattenError(error).fieldErrors)
    .map(([field, errors]) => `  ${field}: ${errors}`)
    .join('\n')
  throw new Error('Missing or invalid environment variables:\n' + errors + '\n')
}

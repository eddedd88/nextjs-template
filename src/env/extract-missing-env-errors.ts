import { ZodError, flattenError } from 'zod'

export function extractMissingEnvErrors<T extends Record<string, unknown>>(
  error: ZodError<T>,
) {
  return Object.entries(flattenError(error).fieldErrors)
    .map(([field, errors]) => `  ${field}: ${errors}`)
    .join('\n')
}

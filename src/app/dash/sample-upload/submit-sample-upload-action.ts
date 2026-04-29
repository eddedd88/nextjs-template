'use server'

import { safeAction } from '@/lib/safe-action'
import { z } from 'zod'

const MAX_FILE_COUNT = 5
const MAX_FILE_SIZE_BYTES = 8 * 1024 * 1024
const ACCEPTED_FILE_TYPES = new Set([
  'application/pdf',
  'image/jpeg',
  'image/png',
  'text/csv',
])

const UploadFileSchema = z
  .custom<File>(
    value => typeof File !== 'undefined' && value instanceof File,
    'Choose a valid file.',
  )
  .refine(file => file.size > 0, 'Files must not be empty.')
  .refine(
    file => file.size <= MAX_FILE_SIZE_BYTES,
    'Each file must be 8 MB or smaller.',
  )
  .refine(
    file => ACCEPTED_FILE_TYPES.has(file.type),
    'Use PNG, JPG, PDF, or CSV files.',
  )

const UploadFormDataSchema = z
  .custom<FormData>(
    value => typeof FormData !== 'undefined' && value instanceof FormData,
    'Upload files with form data.',
  )
  .transform((formData, ctx) => {
    const files = formData.getAll('files')

    if (files.length === 0) {
      ctx.addIssue({
        code: 'custom',
        message: 'Choose at least one file.',
        path: ['files'],
      })
      return z.NEVER
    }

    if (files.length > MAX_FILE_COUNT) {
      ctx.addIssue({
        code: 'custom',
        message: `Upload up to ${MAX_FILE_COUNT} files at a time.`,
        path: ['files'],
      })
      return z.NEVER
    }

    const parsedFiles: File[] = []

    for (const file of files) {
      const result = UploadFileSchema.safeParse(file)

      if (!result.success) {
        ctx.addIssue({
          code: 'custom',
          message: result.error.issues[0]?.message ?? 'This file is invalid.',
          path: ['files'],
        })
        return z.NEVER
      }

      parsedFiles.push(result.data)
    }

    return {
      files: parsedFiles,
    }
  })

export const submitSampleUploadAction = safeAction
  .inputSchema(UploadFormDataSchema)
  .action(async ({ parsedInput: { files } }) => {
    for (const file of files) {
      console.log('Uploaded file received:', {
        name: file.name,
        size: file.size,
        type: file.type,
      })
    }

    console.log(
      'Implement file upload handling in "src/app/dash/sample-upload/submit-sample-upload-action.ts"',
    )

    return {
      message: `Received ${files.length} file${files.length === 1 ? '' : 's'}`,
    }
  })

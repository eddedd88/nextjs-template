'use server'

import { safeAction } from '@/lib/safe-action'
import { SampleFormSchema } from './sample-form-schema'

export const submitSampleFormAction = safeAction
  .inputSchema(SampleFormSchema)
  .action(async ({ parsedInput: { name, description } }) => {
    await new Promise(resolve => setTimeout(resolve, 300))
    console.log('Sample form submitted:', { name, description })
    return {
      message: `Saved sample form for ${name}`,
    }
  })

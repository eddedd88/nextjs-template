import { createVertex } from '@ai-sdk/google-vertex'
import { generateObject } from 'ai'
import { z } from 'zod'

type File = {
  name: string
  data: string
  type: string
}

type Props = {
  files: File[]
  systemInstructions: string
  userMessage: string
  schema: z.ZodObject<any> | z.ZodArray<any>
}

export async function extractInfo({
  files,
  systemInstructions,
  userMessage,
  schema,
}: Props) {
  const vertex = createVertex({
    location: 'us-central1',
  })
  const model = vertex('gemini-2.0-flash-exp', {
    structuredOutputs: true,
  })

  const result = await generateObject({
    model,
    temperature: 0,
    messages: [
      {
        role: 'system',
        content: systemInstructions,
      },
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: userMessage,
          },
          ...files.map(
            file =>
              ({
                type: 'file',
                data: file.data,
                mimeType: file.type,
              }) as const,
          ),
        ],
      },
    ],
    schema,
  })

  return result.object
}

import { UserAction, ActionIdSchema } from '@/app/dash/user-actions'
import { env } from '@/env'
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

export async function matchAction({
  message,
  allActions,
}: {
  message: string
  allActions: UserAction[]
}) {
  const vertex = getVertex()
  const model = vertex('gemini-2.0-flash-exp', {
    structuredOutputs: true,
  })

  const prompt = `Given the following list of actions:
  ${allActions
    .map(
      action => `ID: ${action.id}
  Title: ${action.title}
  Description: ${action.description}
  ---`,
    )
    .join('\n')}

Return only the action ID of the most relevant match. If no good match is found, return "none".`

  const result = await generateObject({
    model,
    temperature: 0,
    messages: [
      {
        role: 'system',
        content: prompt,
      },
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: `Find the most relevant action based on this user input: "${message}"`,
          },
        ],
      },
    ],
    schema: z.object({
      actionId: ActionIdSchema,
    }),
  })
  return result.object
}

export async function extractData({
  files,
  systemInstructions,
  userMessage,
  schema,
}: Props) {
  const vertex = getVertex()
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

function getVertex() {
  const vertex = createVertex({
    location: 'us-central1',
    googleAuthOptions: {
      credentials: {
        client_email: env.GOOGLE_CLIENT_EMAIL,
        private_key: env.GOOGLE_PRIVATE_KEY,
      },
    },
  })
  return vertex
}

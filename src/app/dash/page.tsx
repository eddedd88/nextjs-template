import { CogIcon } from 'lucide-react'

export default function DashPage() {
  return (
    <div className='container flex min-h-[calc(100vh-68px)] flex-col pb-6'>
      <div className='flex grow items-center justify-center'>
        <div className='flex'>
          <CogIcon className='h-12 w-12 animate-[spin_linear_5s_infinite]' />
          <CogIcon className='-ml-3 -mt-5 h-12 w-12 animate-[spin_linear_5s_infinite_reverse_200ms]' />
          <CogIcon className='-ml-2 -mt-2 h-12 w-12 animate-[spin_linear_5s_infinite_350ms]' />
        </div>
        <h1 className='px-4 text-center text-4xl leading-normal md:text-6xl md:leading-normal'>
          Hello World
        </h1>
      </div>
      <h2 className='mb-8 text-center text-2xl'>Getting Started</h2>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        <InstructionBox>
          <p>To setup Auth.js, run:</p>
          <CodeBlock>npx auth secret</CodeBlock>
          <p>
            See the guide at{' '}
            <a
              href='https://authjs.dev/getting-started/installation#setup-environment'
              className='underline hover:text-gray-400'
            >
              authjs.dev
            </a>
          </p>
        </InstructionBox>
        <InstructionBox>
          <p>To setup Google Auth, add to your .env:</p>
          <CodeBlock>
            AUTH_GOOGLE_ID
            <br />
            AUTH_GOOGLE_SECRET
          </CodeBlock>
          <p>
            Get credentials at{' '}
            <a
              href='https://console.cloud.google.com/apis/credentials'
              className='underline hover:text-gray-400'
              target='_blank'
            >
              Google Console
            </a>
          </p>
        </InstructionBox>
        <InstructionBox>
          <p>To setup the database, add to your .env:</p>
          <CodeBlock>
            DATABASE_URL
            <br />
            DATABASE_DIRECT_URL
          </CodeBlock>
          <p>
            Learn more at{' '}
            <a
              href='https://www.prisma.io/docs/reference/database-reference/connection-urls'
              className='underline hover:text-gray-400'
              target='_blank'
            >
              prisma.io
            </a>
          </p>
        </InstructionBox>
        <InstructionBox>
          <p>To setup Google Vertex AI, add to your .env:</p>
          <CodeBlock>
            GOOGLE_VERTEX_PROJECT
            <br />
            GOOGLE_PRIVATE_KEY
            <br />
            GOOGLE_CLIENT_EMAIL
          </CodeBlock>
          <p>
            Learn more at{' '}
            <a
              href='https://sdk.vercel.ai/providers/ai-sdk-providers/google-vertex'
              className='underline hover:text-gray-400'
              target='_blank'
            >
              Vercel AI SDK docs
            </a>
          </p>
        </InstructionBox>
      </div>
    </div>
  )
}

function InstructionBox({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col justify-around gap-2 rounded-xl border p-4 text-center text-sm'>
      {children}
    </div>
  )
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <code className='mx-auto rounded bg-secondary px-8 py-2 text-left font-mono'>
      {children}
    </code>
  )
}

'use client'

import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

const TYPING_SPEED = 75 // in ms

export default function DashPage() {
  const [text, setText] = useState('')
  const fullMessage = 'What are you building tonight?'
  const finishedTyping = text.length === fullMessage.length

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text.length < fullMessage.length) {
        setText(fullMessage.slice(0, text.length + 1))
      }
    }, TYPING_SPEED)

    return () => clearTimeout(timeout)
  }, [text])

  return (
    <div className='flex min-h-[calc(100vh-68px)] w-full items-center justify-center'>
      <h1 className='bg-gray-900 bg-clip-text px-4 text-4xl leading-normal text-transparent md:text-6xl md:leading-normal'>
        {text}
        <span
          className={cn(
            'full -mb-2 ml-0.5 inline-block h-[44px] w-0.5 bg-gray-600 sm:h-[60px]',
            finishedTyping && 'animate-blink',
          )}
        />
      </h1>
      <div className='absolute bottom-8 flex items-center justify-center gap-4'>
        <div className='space-y-4 rounded-xl border p-4 text-center text-sm'>
          <p>To setup Auth.js, run:</p>
          <code className='block rounded bg-secondary p-2 font-mono'>
            npx auth secret
          </code>
          <p className='mt-4'>
            See the guide at{' '}
            <a
              href='https://authjs.dev/getting-started/installation#setup-environment'
              className='underline hover:text-gray-400'
            >
              authjs.dev
            </a>
          </p>
        </div>
        <div className='space-y-2 rounded-xl border p-4 text-center text-sm'>
          <p>To setup Google Auth, add to your .env:</p>
          <code className='inline-block whitespace-pre rounded bg-secondary p-2 text-left font-mono'>
            AUTH_GOOGLE_ID
            <br />
            AUTH_GOOGLE_SECRET
          </code>
          <p className='mt-4'>
            Get credentials at{' '}
            <a
              href='https://console.cloud.google.com/apis/credentials'
              className='underline hover:text-gray-400'
              target='_blank'
            >
              Google Console
            </a>
          </p>
        </div>
        <div className='space-y-2 rounded-xl border p-4 text-center text-sm'>
          <p>To setup the database, add to your .env:</p>
          <code className='inline-block whitespace-pre rounded bg-secondary p-2 text-left font-mono'>
            DATABASE_URL
            <br />
            DATABASE_DIRECT_URL
          </code>
          <p className='mt-4'>
            Learn more at{' '}
            <a
              href='https://www.prisma.io/docs/reference/database-reference/connection-urls'
              className='underline hover:text-gray-400'
              target='_blank'
            >
              prisma.io
            </a>
          </p>
        </div>
        <div className='space-y-2 rounded-xl border p-4 text-center text-sm'>
          <p>To setup Google Vertex AI, add to your .env:</p>
          <code className='inline-block whitespace-pre rounded bg-secondary p-2 text-left font-mono'>
            GOOGLE_VERTEX_PROJECT
            <br />
            GOOGLE_PRIVATE_KEY
            <br />
            GOOGLE_CLIENT_EMAIL
          </code>
          <p className='mt-4'>
            Learn more at{' '}
            <a
              href='https://sdk.vercel.ai/providers/ai-sdk-providers/google-vertex'
              className='underline hover:text-gray-400'
              target='_blank'
            >
              Vercel AI SDK docs
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

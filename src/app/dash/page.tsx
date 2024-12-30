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
    <div className='flex h-screen w-full items-center justify-center'>
      <h1 className='bg-gray-900 bg-clip-text px-4 text-4xl leading-normal text-transparent md:text-6xl md:leading-normal'>
        {text}
        <span
          className={cn(
            'full -mb-2 ml-0.5 inline-block h-1.5 w-0.5 bg-gray-600 sm:h-[60px]',
            finishedTyping && 'animate-blink',
          )}
        />
      </h1>
    </div>
  )
}

'use client'

import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

const TYPING_SPEED = 75 // in ms

const FULL_HEADING = 'What are you building today?'

export function AnimatedHeroHeading() {
  const [displayedText, setDisplayedText] = useState('')
  const finishedTyping = displayedText.length === FULL_HEADING.length

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (displayedText.length < FULL_HEADING.length) {
        setDisplayedText(FULL_HEADING.slice(0, displayedText.length + 1))
      }
    }, TYPING_SPEED)

    return () => clearTimeout(timeout)
  }, [displayedText])

  return (
    <h1 className='h-[108px] bg-gray-900 bg-clip-text px-4 text-center text-4xl font-[350] leading-normal text-transparent sm:h-auto md:text-6xl md:leading-normal'>
      {displayedText}
      <span
        className={cn(
          'full -mb-2 ml-0.5 inline-block h-[44px] w-0.5 bg-gray-600 sm:h-[60px]',
          finishedTyping && 'animate-blink',
        )}
      />
    </h1>
  )
}

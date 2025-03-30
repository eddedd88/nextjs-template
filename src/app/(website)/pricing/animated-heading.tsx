'use client'

import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

const TYPING_SPEED = 200 // in ms
const TYPING_SPEED_2 = 100 // faster speed for second text
const DELETING_SPEED = 80 // in ms
const PAUSE_BEFORE_DELETE = 200 // pause before starting to delete

const FULL_HEADING = '$1,000,000'
const FULL_HEADING_2 = 'Free while in beta'

export function AnimatedHeading() {
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentHeading, setCurrentHeading] = useState(FULL_HEADING)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting && displayedText === FULL_HEADING) {
          setTimeout(() => setIsDeleting(true), PAUSE_BEFORE_DELETE)
          return
        }

        if (isDeleting && displayedText === '') {
          setIsDeleting(false)
          setCurrentHeading(FULL_HEADING_2)
          return
        }

        if (isDeleting) {
          setDisplayedText(prev => prev.slice(0, -1))
        } else {
          setDisplayedText(currentHeading.slice(0, displayedText.length + 1))
        }
      },
      isDeleting
        ? DELETING_SPEED
        : currentHeading === FULL_HEADING
          ? TYPING_SPEED
          : TYPING_SPEED_2,
    )

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentHeading])

  return (
    <h1 className='h-[108px] bg-gray-900 bg-clip-text px-4 text-center text-4xl leading-normal text-transparent sm:h-auto sm:font-[350] md:text-[90px] md:leading-normal'>
      {displayedText}
      <span
        className={cn(
          'full -mb-2 ml-0.5 inline-block h-[44px] w-0.5 bg-gray-600 sm:h-[80px]',
          (displayedText === FULL_HEADING ||
            displayedText === FULL_HEADING_2) &&
            'animate-blink',
        )}
      />
    </h1>
  )
}

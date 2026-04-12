'use client'

import { Page } from '@/components/page'
import { SUPPORT_EMAIL_ADDRESS, UNEXPECTED_ERROR_MESSAGE } from '@/constants'
import { PublicError } from '@/lib/public-error'
// import { ConvexError } from 'convex/values'

export type PageErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export function PageError({ error }: PageErrorProps) {
  let errorMessage = UNEXPECTED_ERROR_MESSAGE

  // if (error instanceof ConvexError) {
  //   errorMessage = error.data
  // }
  if (error instanceof PublicError) {
    errorMessage = error.message
  }

  return (
    <Page className='my-auto max-w-xl'>
      <div className='space-y-6 text-center'>
        <h1 className='text-3xl font-semibold sm:text-4xl'>
          Oops! An error occurred.
        </h1>
        <div className='space-y-1 sm:text-lg'>
          <p className='text-pretty'>{errorMessage}</p>

          {SUPPORT_EMAIL_ADDRESS && (
            <p className='text-pretty text-muted-foreground'>
              If this problem persists, please contact our{' '}
              <a
                href={`mailto:${SUPPORT_EMAIL_ADDRESS}`}
                className='font-medium text-primary underline-offset-4 hover:text-primary/90 hover:underline'
              >
                support team
              </a>
              .
            </p>
          )}
        </div>
      </div>
    </Page>
  )
}

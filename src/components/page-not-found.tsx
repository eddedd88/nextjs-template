import { Button } from '@/components/ui/button'
import { SUPPORT_EMAIL_ADDRESS } from '@/constants'
import Link from 'next/link'
import { Page } from '@/components/page'

export function PageNotFound() {
  return (
    <Page className='my-auto flex h-screen flex-col items-center justify-center'>
      <div className='space-y-6 text-center'>
        <h1 className='text-3xl font-semibold sm:text-4xl'>
          404 - Page Not Found
        </h1>
        <div className='space-y-1 text-lg'>
          <p className='text-muted-foreground'>
            Oops! The page you&apos;re looking for doesn&apos;t exist or has
            been moved.
          </p>

          {SUPPORT_EMAIL_ADDRESS && (
            <p className='text-muted-foreground'>
              If you believe this is an error, please contact our{' '}
              <a
                href={`mailto:${SUPPORT_EMAIL_ADDRESS}`}
                className='text-primary hover:text-primary/90 font-medium underline-offset-4 hover:underline'
              >
                support team
              </a>
              .
            </p>
          )}
        </div>

        <Button asChild>
          <Link href='/'>Return to Home</Link>
        </Button>
      </div>
    </Page>
  )
}

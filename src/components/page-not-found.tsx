import { Button } from '@/components/ui/button'
import Link from 'next/link'

const SUPPORT_EMAIL_ADDRESS = ''

export function PageNotFound() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center px-8 py-12'>
      <div className='space-y-6 text-center'>
        {/* Custom 404 SVG Illustration */}
        <h1 className='text-3xl font-extrabold sm:text-4xl'>
          404 - Page Not Found
        </h1>
        <p className='text-muted-foreground sm:text-lg'>
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>

        <Button asChild>
          <Link href='/'>Return to Home</Link>
        </Button>

        {SUPPORT_EMAIL_ADDRESS && (
          <p className='text-pretty text-muted-foreground'>
            If you believe this is an error, please{' '}
            <a
              href={`mailto:${SUPPORT_EMAIL_ADDRESS}`}
              className='font-medium text-primary underline-offset-4 hover:text-primary/90 hover:underline'
            >
              contact our support team
            </a>
            .
          </p>
        )}
      </div>
    </div>
  )
}

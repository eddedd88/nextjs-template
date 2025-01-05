import { Button } from '@/components/ui/button'
import { ChevronLeftIcon } from 'lucide-react'
import Link from 'next/link'

export default function SetupAuthPage() {
  return (
    <div className='mx-auto max-w-xl animate-fade-in p-6 pt-24'>
      <div className='mt-8 animate-fade-in'>
        <Button size='sm' variant='ghost' asChild>
          <Link href='/dash'>
            <ChevronLeftIcon />
            Back
          </Link>
        </Button>
      </div>
      <div className='mt-8'>
        <h2 className='mb-6 text-3xl'>Setup Authentication with Auth.js</h2>
        <ol className='ml-5 list-decimal space-y-6'>
          <li>Install Auth.js</li>
          <li>
            Run in your terminal
            <div className='mt-2 max-w-52 rounded-md bg-gray-100 p-2'>
              npx auth secret
            </div>
          </li>
          <li>
            See the guide at{' '}
            <a
              href='https://authjs.dev/getting-started/installation#setup-environment'
              target='_blank'
              className='underline hover:text-gray-400'
            >
              authjs.dev
            </a>
          </li>
        </ol>
      </div>
    </div>
  )
}

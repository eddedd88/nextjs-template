import { CogIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function DashPage() {
  return (
    <div className='container flex min-h-[calc(100vh-68px)] flex-col pb-6'>
      <div className='flex grow animate-fade-in flex-col items-center justify-center gap-8'>
        <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
          <div className='mt-12 flex sm:mt-0'>
            <CogIcon className='h-12 w-12 animate-[spin_linear_5s_infinite]' />
            <CogIcon className='-ml-3 -mt-5 h-12 w-12 animate-[spin_linear_5s_infinite_reverse_200ms]' />
            <CogIcon className='-ml-2 -mt-2 h-12 w-12 animate-[spin_linear_5s_infinite_350ms]' />
          </div>
          <h1 className='px-4 text-center text-3xl leading-normal md:text-5xl md:leading-normal'>
            How can I help you?
          </h1>
        </div>
        <div className='mx-auto flex max-w-xs flex-col items-center justify-center gap-4'>
          <Button size='lg' variant='secondary' className='w-full' asChild>
            <Link href='/dash/setup/auth'>
              Setup Authentication with Auth.js
            </Link>
          </Button>
          <Button size='lg' variant='secondary' className='w-full'>
            Setup Google Authentication
          </Button>
          <Button size='lg' variant='secondary' className='w-full'>
            Setup Database
          </Button>
        </div>
      </div>
    </div>
  )
}

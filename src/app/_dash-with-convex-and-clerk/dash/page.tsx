'use client'

import { ArrowRightIcon, CogIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { toast } from 'sonner'
import { Typography } from '@/components/ui/typography'

export default function DashPage() {
  const [input, setInput] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    toast.success(
      <>
        <h2 className='mb-1 text-base font-medium'>Implement this action in</h2>
        <Typography variant='codeBlock'>src/app/dash/page.tsx</Typography>
      </>,
    )
  }

  return (
    <div className='container flex min-h-[calc(100vh-68px)] flex-col pb-6'>
      <div className='animate-fade-in flex grow flex-col items-center justify-center gap-8'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <div className='flex sm:mt-0'>
            <CogIcon className='h-12 w-12 animate-[spin_linear_5s_infinite]' />
            <CogIcon className='-mt-5 -ml-3 h-12 w-12 animate-[spin_linear_5s_infinite_reverse_200ms]' />
            <CogIcon className='-mt-2 -ml-2 h-12 w-12 animate-[spin_linear_5s_infinite_350ms]' />
          </div>
          <h1 className='px-4 text-center text-3xl leading-normal md:text-5xl md:leading-normal'>
            How can I help you?
          </h1>
        </div>

        <div className='mx-auto flex w-full max-w-md flex-col gap-4'>
          <form onSubmit={handleSubmit} className='flex gap-2'>
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder='Describe what you want to do...'
              required
              autoFocus
            />
            <Button type='submit' size='icon' className='p-3'>
              <ArrowRightIcon />
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

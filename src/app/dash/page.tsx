'use client'

import { ArrowRightIcon, CogIcon, Loader2Icon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'sonner'
import { useAction } from 'next-safe-action/hooks'
import { UNEXPECTED_ERROR_MESSAGE } from '@/constants'
import { submitPromptAction } from './submit-prompt-action'

export default function DashPage() {
  const [input, setInput] = useState('')
  const matchMessage = useAction(submitPromptAction, {
    onSuccess: ({ data }) => {
      if (!data) {
        toast.error(
          "I'm not able to help with that. Please try something else.",
        )
        setInput('')
      } else {
        toast.success(data.message)
      }
    },
    onError: () => {
      toast.error(UNEXPECTED_ERROR_MESSAGE)
      setInput('')
    },
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    matchMessage.execute({
      message: input.trim(),
    })
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
              disabled={matchMessage.isPending}
              autoFocus
            />
            <Button
              type='submit'
              disabled={matchMessage.isPending}
              size='icon'
              className='p-3'
            >
              {matchMessage.isPending ? (
                <Loader2Icon className='animate-spin' />
              ) : (
                <ArrowRightIcon />
              )}
            </Button>
          </form>

          <div className='mt-8 flex flex-col gap-4'>
            <h2 className='text-sm'>Recent Actions</h2>
            <Button size='lg' variant='secondary' className='w-full' asChild>
              <Link href='/dash/setup/google-auth'>
                Setup Google Authentication
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

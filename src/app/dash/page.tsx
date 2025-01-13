'use client'

import { ArrowRightIcon, CogIcon, Loader2Icon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useState } from 'react'
import { matchMessageAction } from './match-message-action'
import { toast } from 'sonner'
import { useAction } from 'next-safe-action/hooks'
import { useRouter } from 'next/navigation'
import { UNEXPECTED_ERROR_MESSAGE } from '@/constants'

export default function DashPage() {
  const router = useRouter()
  const [input, setInput] = useState('')
  const matchMessage = useAction(matchMessageAction, {
    onSuccess: ({ data }) => {
      if (!data) {
        toast.error(
          "I'm not able to help with that. Please try something else.",
        )
        setInput('')
      } else {
        router.push(data.url)
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
      <div className='flex grow animate-fade-in flex-col items-center justify-center gap-8'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <div className='flex sm:mt-0'>
            <CogIcon className='h-12 w-12 animate-[spin_linear_5s_infinite]' />
            <CogIcon className='-ml-3 -mt-5 h-12 w-12 animate-[spin_linear_5s_infinite_reverse_200ms]' />
            <CogIcon className='-ml-2 -mt-2 h-12 w-12 animate-[spin_linear_5s_infinite_350ms]' />
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
              disabled={matchMessage.status === 'executing'}
              autoFocus
            />
            <Button
              type='submit'
              disabled={matchMessage.status === 'executing'}
              size='icon'
              className='p-3'
            >
              {matchMessage.status === 'executing' ? (
                <Loader2Icon className='animate-spin' />
              ) : (
                <ArrowRightIcon />
              )}
            </Button>
          </form>

          <div className='mt-8 flex flex-col gap-4'>
            <h2 className='text-lg font-semibold'>Recent Actions</h2>
            <Button size='lg' variant='secondary' className='w-full' asChild>
              <Link href='/dash/setup/auth'>
                Setup Authentication with Auth.js
              </Link>
            </Button>
            <Button size='lg' variant='secondary' className='w-full' asChild>
              <Link href='/dash/setup/google-auth'>
                Setup Google Authentication
              </Link>
            </Button>
            <Button size='lg' variant='secondary' className='w-full' asChild>
              <Link href='/dash/users'>Manage Users</Link>
            </Button>
            <Button size='lg' variant='outline' className='w-full' asChild>
              <Link href='/dash/workflows'>See all my capabilities</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

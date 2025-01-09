'use client'

import { CogIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useState } from 'react'
import { matchMessageAction } from './match-message-action'
import { toast } from 'sonner'
import { useAction } from 'next-safe-action/hooks'
import { useRouter } from 'next/navigation'
import { UNEXPECTED_ERROR_MESSAGE } from '@/constants'

/**
 * TODO:
 * - move this ai page to the home page
 * - add the edit user page
 * - add a way to display all the user actions
 * - make new dash page responsive
 */
export default function DashPage() {
  const router = useRouter()
  const [input, setInput] = useState('')
  const matchMessage = useAction(matchMessageAction, {
    onSuccess: ({ data }) => {
      if (!data) {
        toast.error('No matching action found for your request.')
      } else {
        router.push(data.url)
      }
    },
    onError: () => {
      toast.error(UNEXPECTED_ERROR_MESSAGE)
    },
    onSettled: () => {
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
              placeholder="Type what you're looking for..."
              className='flex-1'
              disabled={matchMessage.status === 'executing'}
            />
            <Button
              type='submit'
              disabled={matchMessage.status === 'executing'}
              className='w-28'
            >
              {matchMessage.status === 'executing' ? 'Searching' : 'Search'}
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
          </div>
        </div>
      </div>
    </div>
  )
}

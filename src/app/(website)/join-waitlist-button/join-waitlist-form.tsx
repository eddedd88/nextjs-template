'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { addWaitlistAction } from './add-waitlist-action'
import { useState } from 'react'

export function JoinWaitlistForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitted(true)
    const formData = new FormData(e.currentTarget)
    await addWaitlistAction(formData)
  }

  if (isSubmitted) {
    return (
      <p className='flex h-[204px] items-center justify-center space-y-4 py-6 text-center duration-300 ease-in animate-in fade-in-0 sm:text-left'>
        Thanks for joining the waitlist!
      </p>
    )
  }

  return (
    <form className='space-y-4' onSubmit={handleSubmit}>
      <div className='space-y-1'>
        <Label htmlFor='name'>Name</Label>
        <Input
          id='name'
          type='text'
          name='name'
          placeholder='Enter your name'
          maxLength={200}
          required
        />
      </div>
      <div className='space-y-1 pb-2'>
        <Label htmlFor='email'>Email</Label>
        <Input
          id='email'
          type='email'
          name='email'
          placeholder='Enter your email'
          maxLength={200}
          required
        />
      </div>
      <Button type='submit' className='w-full'>
        Submit
      </Button>
    </form>
  )
}

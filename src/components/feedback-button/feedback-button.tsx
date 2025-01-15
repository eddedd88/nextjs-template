'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { submitFeedbackAction } from './submit-feedback-action'
import { useState } from 'react'
import { useAction } from 'next-safe-action/hooks'

export function FeedbackButton() {
  const [open, setOpen] = useState(false)
  const submitFeedback = useAction(submitFeedbackAction, {
    onExecute: () => {
      setOpen(false)
      toast('Thank you for your feedback!')
    },
  })

  async function handleSubmit(formData: FormData) {
    submitFeedback.execute({
      message: formData.get('message') as string,
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='outline'>Feedback</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Send Feedback</DialogTitle>
          <DialogDescription>
            Let us know how we can improve your experience.
          </DialogDescription>
        </DialogHeader>
        <form action={handleSubmit}>
          <Textarea
            name='message'
            placeholder='Enter your feedback here...'
            className='min-h-[120px]'
            required
          />
          <div className='mt-4 flex justify-end'>
            <Button type='submit'>Submit</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog'
import { JoinWaitlistForm } from './join-waitlist-form'

export function JoinWaitlistButton() {
  return (
    <Dialog>
      <DialogTrigger
        render={<Button size='lg' variant='outline' className='px-6' />}
      >
        Join Waitlist
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Join our Waitlist (Demo)</DialogTitle>
          <DialogDescription>
            Get early access to our product and receive updates.
          </DialogDescription>
        </DialogHeader>
        <JoinWaitlistForm />
      </DialogContent>
    </Dialog>
  )
}

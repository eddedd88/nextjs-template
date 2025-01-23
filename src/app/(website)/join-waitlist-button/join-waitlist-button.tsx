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
      <DialogTrigger asChild>
        <Button size='lg' variant='outline'>
          Join Waitlist
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-md'>
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

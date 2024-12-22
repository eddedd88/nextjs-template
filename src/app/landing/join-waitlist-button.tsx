import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function JoinWaitlistButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size='lg'>Join Waitlist</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Join our Waitlist</DialogTitle>
          <DialogDescription>
            Get early access to our product and receive updates.
          </DialogDescription>
        </DialogHeader>
        <form className='space-y-6'>
          <div className='space-y-1'>
            <Label htmlFor='name'>Name</Label>
            <Input
              id='name'
              type='text'
              placeholder='Enter your name'
              required
            />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              placeholder='Enter your email'
              required
            />
          </div>
          <Button type='submit'>Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

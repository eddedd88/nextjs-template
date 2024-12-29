import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { JoinWaitlistButton } from './join-waitlist-button'

export function HeroSection() {
  return (
    <section className='mx-auto flex flex-col items-center gap-6 px-4 py-20 text-center'>
      <h1 className='max-w-4xl text-balance text-4xl font-[350] leading-normal tracking-tight sm:text-6xl sm:leading-tight'>
        Launch your startup in minutes.
      </h1>
      <p className='max-w-3xl text-pretty pb-2 text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-8'>
        A template with a landing page, dashboard, auth, database, and
        everything you need to launch your app, gather feedback, and iterate
        fast.
      </p>
      {/* <JoinWaitlistButton /> */}
      <div className='flex items-center space-x-4 pb-4'>
        <Button size='lg' asChild>
          <Link href='/dash'>Try it for Free</Link>
        </Button>
        <Button variant='outline' size='lg'>
          Book a Demo
        </Button>
      </div>
      <div className='relative aspect-video w-full max-w-6xl overflow-hidden rounded-xl shadow-sm'>
        <Image
          src='/fake-saas.png'
          alt='demo image'
          priority
          fill
          className='object-contain object-top'
        />
        <div className='absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white to-transparent' />
      </div>
    </section>
  )
}

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className='mx-auto flex flex-col items-center space-y-6 px-4 pt-20 text-center'>
      <h1 className='max-w-4xl text-balance text-4xl font-[350] leading-normal tracking-tight sm:text-6xl sm:leading-tight'>
        Launch your startup in minutes.
      </h1>
      <p className='max-w-3xl text-pretty pb-2 text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-8'>
        A template with a landing page, dashboard, auth, database, and
        everything you need to launch your app, gather feedback, and iterate
        fast.
      </p>
      <div className='flex items-center space-x-4'>
        <Button size='lg'>
          <Link href='/dash'>Try it for Free</Link>
        </Button>
        <Button variant='secondary' size='lg'>
          Book a Demo
        </Button>
      </div>
    </section>
  )
}

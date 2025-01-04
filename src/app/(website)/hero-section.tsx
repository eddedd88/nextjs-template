import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { JoinWaitlistButton } from './join-waitlist-button'
import { AnimatedHeroHeading } from './animated-hero-heading'

export function HeroSection() {
  return (
    <section className='mx-auto flex flex-col items-center gap-6 px-4 py-20 text-center'>
      <AnimatedHeroHeading />
      {/* Non animated heading */}
      {/* <h1 className='px-4 text-4xl font-[350] leading-normal md:text-6xl md:leading-normal'>
        What are you building today?
      </h1> */}
      <p className='max-w-3xl text-pretty pb-2 text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-8'>
        A template with a landing page, dashboard, auth, database, and
        everything you need to launch your app, gather feedback, and iterate
        fast.
      </p>
      <div className='flex items-center space-x-4 pb-4'>
        <Button size='lg' asChild>
          <Link href='/dash'>Try it for Free</Link>
        </Button>
        <span>or</span>

        <JoinWaitlistButton />
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

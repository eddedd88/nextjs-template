import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { JoinWaitlistButton } from './join-waitlist-button'
import { AnimatedHeroHeading } from './animated-hero-heading'

export function HeroSection() {
  return (
    <section className='mx-auto flex flex-col items-center gap-6 bg-gradient-to-b from-background from-40% via-primary/10 to-background px-4 py-20 text-center sm:from-10% 2xl:pt-60'>
      <AnimatedHeroHeading />
      {/* Non animated heading */}
      {/* <h1 className='px-4 text-4xl font-[350] leading-normal md:text-6xl md:leading-normal'>
        What are you building today?
      </h1> */}
      <p className='max-w-3xl text-pretty pb-2 text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-8'>
        A free github template with a landing page, dashboard, auth, database,
        and everything you need to launch your app, gather feedback, and iterate
        fast.
      </p>
      <div className='flex items-center gap-4 pb-4'>
        <Button size='lg' asChild>
          <a
            href='https://github.com/eddedd88/nextjs-template'
            target='_blank'
            className='flex items-center gap-4'
          >
            Use This Template
          </a>
        </Button>
        <Button size='lg' asChild variant='outline'>
          <Link href='/dash'>See Dashboard</Link>
        </Button>
      </div>
      <div className='relative aspect-video w-full max-w-6xl overflow-hidden rounded-xl shadow-sm 2xl:mt-20 2xl:max-w-[1600px]'>
        <Image
          src='/fake-saas.png'
          alt='demo image'
          priority
          fill
          className='object-contain object-top'
        />
        <div className='absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white to-transparent' />
      </div>
      <a
        className='text-xs text-muted-foreground'
        href='https://ui.shadcn.com/examples/tasks'
        target='_blank'
        rel='noopener noreferrer'
      >
        Image by <span className='underline underline-offset-4'>shadcn</span>
      </a>
    </section>
  )
}

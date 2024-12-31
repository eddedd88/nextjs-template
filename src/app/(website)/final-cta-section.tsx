import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function FinalCTASection() {
  return (
    <section className='bg-gradient-to-b from-white to-secondary to-20% pb-32 pt-16 sm:pt-24'>
      <h2 className='mb-6 text-center text-3xl sm:text-4xl'>
        Ready to get started?
      </h2>
      <p className='mx-auto max-w-3xl text-pretty text-center text-lg leading-7 text-muted-foreground sm:leading-8'>
        Take your project to the next level with a solution designed to make an
        impact. Start your journey today and experience the difference
        firsthand.
      </p>
      <div className='mt-8 flex items-center justify-center gap-4'>
        <Button asChild size='lg'>
          <Link href='/dash'>Get Started</Link>
        </Button>
        <Button variant='outline' size='lg'>
          Book a Demo
        </Button>
      </div>
    </section>
  )
}

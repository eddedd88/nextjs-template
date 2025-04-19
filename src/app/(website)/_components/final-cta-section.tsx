import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { JoinWaitlistButton } from './join-waitlist-button'
import { PageSectionTitle } from './page-section'

export function FinalCTASection() {
  return (
    <section className='to-primary/5 from-background bg-linear-to-b to-40% pt-16 pb-32 sm:pt-24'>
      <PageSectionTitle className='mb-2 sm:mb-2'>
        Ready to get started?
      </PageSectionTitle>
      <p className='text-muted-foreground mx-auto max-w-3xl text-center text-lg leading-7 text-pretty sm:leading-8'>
        Take your project to the next level with a solution designed to make an
        impact. Start your journey today and experience the difference
        firsthand.
      </p>
      <div className='mt-8 flex items-center justify-center gap-4'>
        <Button asChild size='lg' className='px-8'>
          <Link href='/dash'>Get Started</Link>
        </Button>
        <JoinWaitlistButton />
      </div>
    </section>
  )
}

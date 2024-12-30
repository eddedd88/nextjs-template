import { Button } from '@/components/ui/button'
import { FAQSection } from './faq-section'
import { HeroSection } from './hero-section'
import { HowItWorksSection } from './how-it-works-section'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FAQSection />
      <section className='bg-gradient-to-b from-white to-secondary to-20% py-16 pb-32'>
        <h2 className='mb-6 text-center text-3xl sm:text-4xl'>
          Ready to get started?
        </h2>
        <p className='mx-auto max-w-3xl text-pretty text-center text-xl'>
          Take your project to the next level with a solution designed to make
          an impact. Start your journey today and experience the difference
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
    </>
  )
}

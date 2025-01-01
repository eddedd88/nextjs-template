import { FAQSection } from './faq-section'
import { HeroSection } from './hero-section'
import { HowItWorksSection } from './how-it-works-section'
import { FinalCTASection } from './final-cta-section'
import type { Metadata } from 'next'

export const metatdata: Metadata = {
  title: 'Nitro | Launch your SaaS today',
  description:
    'Nitro is a full-stack SaaS starter kit that helps you build and deploy your next idea in minutes.',
  keywords: [
    'nextjs starter kit',
    'fullstack starter kit',
    'saas starter kit',
    'launch your saas',
    'saas template',
  ],
}

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FAQSection />
      <FinalCTASection />
    </>
  )
}

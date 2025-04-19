import { FAQSection } from './_components/faq-section'
import { HeroSection } from './_components/hero-section'
import { HowItWorksSection } from './_components/how-it-works-section'
import { FinalCTASection } from './_components/final-cta-section'
import type { Metadata } from 'next'
import { AboutMeSection } from './_components/about-me-section'
import { FeaturesSection } from './_components/features-section'

export const metadata: Metadata = {
  title: 'Nitro | Launch your AI SaaS today',
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
      <FeaturesSection />
      <FAQSection />
      <AboutMeSection />
      <FinalCTASection />
    </>
  )
}

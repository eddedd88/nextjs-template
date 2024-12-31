import { FAQSection } from './faq-section'
import { HeroSection } from './hero-section'
import { HowItWorksSection } from './how-it-works-section'
import { FinalCTASection } from './final-cta-section'

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

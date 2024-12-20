import { HeroSection } from './hero-section'
import { NavBar } from './navbar'

export default function LandingPage() {
  return (
    <div>
      <header className='container'>
        <NavBar />
      </header>
      <main className='grow pb-12 md:pb-20'>
        <HeroSection />
      </main>
    </div>
  )
}

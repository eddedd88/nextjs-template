import { Footer } from './footer'
import { HeroSection } from './hero-section'
import { NavBar } from './navbar'

export default function LayoutLandingPage({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex min-h-screen flex-col bg-gradient-to-b from-white from-15% via-primary/10 via-30% to-white to-70%'>
      <header className='container'>
        <NavBar />
      </header>
      <main className='grow'>{children}</main>
      <Footer />
    </div>
  )
}

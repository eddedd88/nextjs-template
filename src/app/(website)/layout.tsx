import { Footer } from './footer'
import { NavBar } from './navbar'

export default function LayoutLandingPage({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex min-h-screen flex-col bg-gradient-to-b from-white from-10% via-primary/10 via-20% to-white to-25% sm:via-15% sm:to-45%'>
      <header className='container'>
        <NavBar />
      </header>
      <main className='grow'>{children}</main>
      <Footer />
    </div>
  )
}

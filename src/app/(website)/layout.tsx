import { Footer } from './footer'
import { NavBar } from './navbar'

export default function LayoutLandingPage({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='px-6'>
        <NavBar />
      </header>
      <main className='grow'>{children}</main>
      <Footer />
    </div>
  )
}

import { Footer } from './_components/footer'
import { NavBar } from './_components/navbar'

export default function LayoutLandingPage({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='px-4 sm:px-6'>
        <NavBar />
      </header>
      <main className='grow'>{children}</main>
      <Footer />
    </div>
  )
}

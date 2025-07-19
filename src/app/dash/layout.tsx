import Link from 'next/link'
import { COMPANY_NAME } from '@/constants'
import { FeedbackButton } from '@/components/feedback-button'
import { Toaster } from '@/components/ui/sonner'
import { UserNav } from './usernav'
import { Logo } from '@/components/logo'

export default function DashLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='px-4 sm:px-6'>
        <nav className='flex items-center justify-between gap-4 py-4'>
          <Link className='flex items-center gap-4' href='/'>
            <Logo />
            {COMPANY_NAME}
          </Link>
          <div className='flex items-center gap-4'>
            <FeedbackButton />
            <UserNav />
          </div>
        </nav>
      </header>
      {children}
      <Toaster />
    </div>
  )
}

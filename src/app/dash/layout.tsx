import Link from 'next/link'
import { FlaskConicalIcon } from 'lucide-react'
import { COMPANY_NAME } from '@/constants'
import { FeedbackButton } from './feedback-button'
import { Toaster } from '@/components/ui/sonner'

export default function LayoutDashPage({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='container'>
        <nav className='flex items-center justify-between gap-4 py-4'>
          <Link className='flex items-center gap-2' href='/'>
            <FlaskConicalIcon className='h-8 w-8 rotate-[30deg] stroke-1' />
            {COMPANY_NAME}
          </Link>

          <div>
            <FeedbackButton />
          </div>
        </nav>
      </header>
      <main className='grow'>{children}</main>
      <Toaster />
    </div>
  )
}

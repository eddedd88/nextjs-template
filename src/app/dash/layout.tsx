import Link from 'next/link'
import { FlaskConicalIcon } from 'lucide-react'
import { COMPANY_NAME } from '@/constants'
import { FeedbackButton } from './feedback-button'
import { Toaster } from '@/components/ui/sonner'
import { Button, buttonVariants } from '@/components/ui/button'
import { VariantProps } from 'class-variance-authority'

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
          <div className='flex items-center gap-4'>
            <NavLinkItem href='/dash' label='Home' />
            <NavLinkItem href='/dash/ai' label='AI Chat' />
            <FeedbackButton />
          </div>
        </nav>
      </header>
      <main className='grow'>{children}</main>
      <Toaster />
    </div>
  )
}

interface NavLinkItemProps extends VariantProps<typeof buttonVariants> {
  href: string
  label: string
}

function NavLinkItem({ href, label, variant = 'ghost' }: NavLinkItemProps) {
  return (
    <Button variant={variant} asChild>
      <Link href={href}>{label}</Link>
    </Button>
  )
}

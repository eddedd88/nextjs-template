import { Button } from '@/components/ui/button'
import { ChevronLeftIcon } from 'lucide-react'
import Link from 'next/link'

export function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className='container mx-auto max-w-3xl animate-fade-in p-6'>
      {children}
    </div>
  )
}

export function PageTitle({ children }: { children: React.ReactNode }) {
  return <h2 className='mb-6 text-3xl'>{children}</h2>
}

export function PageBackButton() {
  return (
    <Button
      variant='ghost'
      size='sm'
      className='-ml-2 mb-6 hidden p-2 text-muted-foreground sm:inline-flex'
      asChild
    >
      <Link href='/dash'>
        <ChevronLeftIcon />
        Back
      </Link>
    </Button>
  )
}

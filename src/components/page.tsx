import { Button } from '@/components/ui/button'
import { ChevronLeftIcon } from 'lucide-react'
import Link from 'next/link'

export function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className='animate-fade-in container mx-auto max-w-3xl pt-6 pb-12'>
      {children}
    </div>
  )
}

export function PageTitle({ children }: { children: React.ReactNode }) {
  return <h1 className='mb-6 text-3xl leading-normal'>{children}</h1>
}

type PageBackButtonProps = {
  backUrl?: string
}
export function PageBackButton({ backUrl = '/dash' }: PageBackButtonProps) {
  return (
    <Button
      variant='ghost'
      size='sm'
      className='text-muted-foreground mb-6 -ml-2 hidden p-2 sm:inline-flex'
      asChild
    >
      <Link href={backUrl}>
        <ChevronLeftIcon />
        Back
      </Link>
    </Button>
  )
}

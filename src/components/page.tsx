import { Button } from '@/components/ui/button'
import { ChevronLeftIcon } from 'lucide-react'
import Link from 'next/link'

export function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className='container mx-auto max-w-3xl animate-fade-in pb-12 pt-6'>
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
      className='-ml-2 mb-6 hidden p-2 text-muted-foreground sm:inline-flex'
      asChild
    >
      <Link href={backUrl}>
        <ChevronLeftIcon />
        Back
      </Link>
    </Button>
  )
}

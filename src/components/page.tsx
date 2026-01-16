import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronLeftIcon } from 'lucide-react'
import Link from 'next/link'
import type { Route } from 'next'

export function Page({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <main
      className={cn(
        // To vertically center the page use: my-auto
        'animate-fade-in container space-y-6 p-4 md:py-8 lg:py-12',
        className,
      )}
    >
      {children}
    </main>
  )
}

export function PageTitle({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h1 className={cn('text-3xl leading-normal', className)}>{children}</h1>
  )
}

type PageBackButtonProps = {
  backUrl?: Route
}
export function PageBackButton({ backUrl = '/dash' }: PageBackButtonProps) {
  return (
    <Button
      variant='ghost'
      size='sm'
      className='text-muted-foreground -ml-2 hidden has-[>svg]:pl-1 sm:inline-flex'
      asChild
    >
      <Link href={backUrl}>
        <ChevronLeftIcon />
        Back
      </Link>
    </Button>
  )
}

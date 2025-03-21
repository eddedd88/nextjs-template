import { cn } from '@/lib/utils'

export function PageSection({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={cn('container py-16 sm:py-24', className)}>
      {children}
    </section>
  )
}

export function PageSectionTitle({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2
      className={cn(
        'mb-6 text-center text-3xl leading-relaxed text-pretty sm:mb-12 sm:text-4xl',
        className,
      )}
    >
      {children}
    </h2>
  )
}

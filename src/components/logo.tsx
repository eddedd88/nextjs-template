import { cn } from '@/lib/utils'
import { FlaskConicalIcon } from 'lucide-react'

type Props = {
  className?: string
}
export function Logo({ className }: Props) {
  return (
    <FlaskConicalIcon className={cn('size-8 rotate-30 stroke-1', className)} />
  )
}

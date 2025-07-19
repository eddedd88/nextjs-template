import { cn } from '@/lib/utils'
import { FlaskConicalIcon } from 'lucide-react'

type Props = {
  className?: string
}
export function Logo({ className }: Props) {
  return (
    <FlaskConicalIcon
      className={cn('h-8 w-8 rotate-[30deg] stroke-1', className)}
    />
  )
}

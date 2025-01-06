import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const typographyVariants = cva('', {
  variants: {
    variant: {
      p: 'leading-7 [&:not(:first-child)]:mt-6',
      codeBlock: 'rounded bg-muted p-3 font-mono text-sm block break-words',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
})

export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement | HTMLElement>,
    VariantProps<typeof typographyVariants> {}

export const Typography = ({
  className,
  variant,
  children,
}: TypographyProps) => {
  let Comp: React.ElementType = 'p'
  if (variant === 'codeBlock') {
    Comp = 'code'
  }
  return (
    <Comp className={cn(typographyVariants({ variant, className }))}>
      {children}
    </Comp>
  )
}

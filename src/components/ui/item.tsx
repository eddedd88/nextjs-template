import * as React from 'react'
import { Slot } from 'radix-ui'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const itemVariants = cva(
  'group/item flex w-full items-start gap-3 rounded-lg border bg-background text-sm shadow-xs transition-colors outline-none',
  {
    variants: {
      variant: {
        default: 'border-border',
        ghost: 'border-transparent bg-transparent shadow-none',
      },
      size: {
        default: 'p-3',
        sm: 'p-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Item({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'div'> &
  VariantProps<typeof itemVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : 'div'

  return (
    <Comp
      data-slot='item'
      className={cn(itemVariants({ variant, size, className }))}
      {...props}
    />
  )
}

function ItemMedia({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='item-media'
      className={cn('shrink-0', className)}
      {...props}
    />
  )
}

function ItemContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='item-content'
      className={cn('min-w-0 flex-1 space-y-1', className)}
      {...props}
    />
  )
}

function ItemTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='item-title'
      className={cn('truncate font-medium', className)}
      {...props}
    />
  )
}

function ItemDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='item-description'
      className={cn('text-xs text-muted-foreground', className)}
      {...props}
    />
  )
}

function ItemActions({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='item-actions'
      className={cn('ml-auto flex shrink-0 items-center gap-2', className)}
      {...props}
    />
  )
}

export { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions }

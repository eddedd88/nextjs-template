'use client'

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from '@/components/ui/field'

import { FieldValues, Controller, ControllerProps } from 'react-hook-form'
import { useRender } from '@base-ui/react/use-render'
import type { ReactElement } from 'react'
import { cn } from 'cn'

type Props<T extends FieldValues> = {
  children: ReactElement
  label?: string
  description?: string
  className?: string
} & Pick<ControllerProps<T>, 'name' | 'control'>

export function ControlledField<T extends FieldValues>({
  name,
  label,
  control,
  description,
  className,
  children,
}: Props<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field
          data-invalid={fieldState.invalid}
          className={cn('gap-1', description && 'mb-5', className)}
        >
          {label && <FieldLabel htmlFor={field.name}>{label}</FieldLabel>}
          <div className='grid gap-1'>
            <FieldControl
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
            >
              {children}
            </FieldControl>
            {description && !fieldState.error && (
              <FieldDescription className='h-6 animate-fade-in'>
                {description}
              </FieldDescription>
            )}
            {(!description || fieldState.error) && (
              <div className='h-6'>
                <FieldError
                  errors={[fieldState.error]}
                  className='animate-fade-in'
                />
              </div>
            )}
          </div>
        </Field>
      )}
    />
  )
}

function FieldControl({
  children,
  ref,
  ...props
}: useRender.ComponentProps<'input'> & { children: ReactElement }) {
  return useRender({
    defaultTagName: 'input',
    render: children,
    ref,
    props,
  })
}

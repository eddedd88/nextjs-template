'use client'

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from '@/components/ui/field'

import { FieldValues, Controller, ControllerProps } from 'react-hook-form'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

type Props<T extends FieldValues> = {
  children: React.ReactNode
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
          <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
          <div className='grid gap-1'>
            <Slot {...field} aria-invalid={fieldState.invalid}>
              {children}
            </Slot>
            {description && !fieldState.error && (
              <FieldDescription className='animate-fade-in h-6'>
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

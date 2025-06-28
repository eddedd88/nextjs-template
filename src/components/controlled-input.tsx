import { Control, FieldPathByValue, FieldValues } from 'react-hook-form'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'

type Props<T extends FieldValues> = {
  control: Control<T>
  children: React.ReactNode
  name: FieldPathByValue<T, string>
  label?: string
  description?: string
}

export function ControlledInput<T extends FieldValues>({
  name,
  label,
  control,
  description,
  children,
}: Props<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <div className='grid gap-1'>
            <FormControl {...field}>{children}</FormControl>
            {description && !fieldState.error && (
              <FormDescription className='h-6'>{description}</FormDescription>
            )}
            {(!description || fieldState.error) && (
              <div className='h-6'>
                <FormMessage />
              </div>
            )}
          </div>
        </FormItem>
      )}
    />
  )
}

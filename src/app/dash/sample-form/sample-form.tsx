'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'

import { ControlledField } from '@/components/cotrolled-field'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const sampleFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Name is required')
    .max(80, 'Name is too long'),
  description: z
    .string()
    .trim()
    .min(10, 'Description must be at least 10 characters')
    .max(500, 'Description is too long'),
})

type SampleFormValues = z.infer<typeof sampleFormSchema>

const defaultValues: SampleFormValues = {
  name: '',
  description: '',
}

export function SampleForm() {
  const form = useForm<SampleFormValues>({
    resolver: zodResolver(sampleFormSchema),
    defaultValues,
  })

  const handleSubmit = (values: SampleFormValues) => {
    toast.success('Sample form submitted', {
      description: `${values.name}: ${values.description}`,
    })
  }

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className='flex-col gap-6'>
      <ControlledField control={form.control} name='name' label='Name'>
        <Input placeholder='Jane Doe' />
      </ControlledField>

      <ControlledField
        control={form.control}
        name='description'
        label='Description'
        description='Add a short description with at least 10 characters.'
      >
        <Textarea
          placeholder='Describe what this sample form should capture.'
          className='h-24 resize-none'
        />
      </ControlledField>

      <div className='flex justify-end'>
        <Button type='submit'>Submit</Button>
      </div>
    </form>
  )
}

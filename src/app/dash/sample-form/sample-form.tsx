'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useAction } from 'next-safe-action/hooks'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'
import { ControlledField } from '@/components/cotrolled-field'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Spinner } from '@/components/ui/spinner'
import { Textarea } from '@/components/ui/textarea'
import { submitSampleFormAction } from './submit-sample-form-action'
import { UNEXPECTED_ERROR_MESSAGE } from '@/constants'
import { SampleFormSchema } from './sample-form-schema'

export function SampleForm() {
  const form = useForm<z.infer<typeof SampleFormSchema>>({
    resolver: zodResolver(SampleFormSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  })
  const submitSampleForm = useAction(submitSampleFormAction, {
    onSuccess: ({ data }) => {
      toast.success(data?.message ?? 'Sample form submitted')
      form.reset({
        name: '',
        description: '',
      })
    },
    onError: ({ error }) => {
      console.error(error)
      toast.error(error.serverError || UNEXPECTED_ERROR_MESSAGE)
    },
  })

  const handleSubmit = (values: z.infer<typeof SampleFormSchema>) => {
    submitSampleForm.execute(values)
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
        <Button type='submit' disabled={submitSampleForm.isPending}>
          {submitSampleForm.isPending && <Spinner />}
          Submit
        </Button>
      </div>
    </form>
  )
}

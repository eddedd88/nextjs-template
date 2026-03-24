import { Page, PageBackButton, PageTitle } from '@/components/page'

import { SampleForm } from './sample-form'

export default function SampleFormPage() {
  return (
    <Page className='max-w-md sm:my-auto'>
      <div>
        <PageBackButton href='/dash' />
        <PageTitle className='mt-2'>Sample form</PageTitle>
        <p className='max-w-2xl text-sm text-muted-foreground'>
          This page demonstrates a simple form built with React Hook Form and
          the shared controlled field component.
        </p>
      </div>
      <SampleForm />
    </Page>
  )
}

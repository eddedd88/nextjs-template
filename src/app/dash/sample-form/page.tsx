import {
  Page,
  PageBackButton,
  PageDescription,
  PageTitle,
} from '@/components/page'

import { SampleForm } from './sample-form'

export default function SampleFormPage() {
  return (
    <Page className='max-w-md sm:my-auto'>
      <div>
        <PageBackButton href='/dash' />
        <PageTitle>Sample form</PageTitle>
        <PageDescription>
          This page demonstrates a simple form built with React Hook Form and
          the shared controlled field component.
        </PageDescription>
      </div>
      <SampleForm />
    </Page>
  )
}

import {
  Page,
  PageBackButton,
  PageDescription,
  PageTitle,
} from '@/components/page'

import { SampleUpload } from './sample-upload'

export default function SampleUploadPage() {
  return (
    <Page className='max-w-2xl'>
      <div>
        <PageBackButton href='/dash' />
        <PageTitle>Sample upload</PageTitle>
        <PageDescription>
          A frontend-only file upload surface with drag and drop, validation,
          and file queue management.
        </PageDescription>
      </div>
      <SampleUpload />
    </Page>
  )
}

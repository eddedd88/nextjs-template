import { Page, PageBackButton, PageTitle } from '@/components/page'
import { Typography } from '@/components/ui/typography'

export default function SetupAuthPage() {
  return (
    <Page>
      <PageBackButton />
      <PageTitle>Setup Authentication with Auth.js</PageTitle>
      <Typography>Run in your terminal:</Typography>
      <Typography variant='codeBlock' className='mt-2'>
        npx auth secret
      </Typography>
      <Typography>
        See the guide at{' '}
        <a
          href='https://authjs.dev/getting-started/installation#setup-environment'
          target='_blank'
          className='underline hover:text-gray-400'
        >
          authjs.dev
        </a>
      </Typography>
    </Page>
  )
}

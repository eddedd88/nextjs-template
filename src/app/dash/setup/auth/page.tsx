import { Page, PageBackButton, PageTitle } from '@/components/page'

export default function SetupAuthPage() {
  return (
    <Page>
      <PageBackButton />
      <PageTitle>Setup Authentication with Auth.js</PageTitle>
      <ol className='ml-5 list-decimal space-y-6'>
        <li>Install Auth.js</li>
        <li>
          Run in your terminal
          <div className='mt-2 max-w-52 rounded-md bg-gray-100 p-2'>
            npx auth secret
          </div>
        </li>
        <li>
          See the guide at{' '}
          <a
            href='https://authjs.dev/getting-started/installation#setup-environment'
            target='_blank'
            className='underline hover:text-gray-400'
          >
            authjs.dev
          </a>
        </li>
      </ol>
    </Page>
  )
}

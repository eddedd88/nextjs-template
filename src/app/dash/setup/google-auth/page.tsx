import { Page, PageBackButton, PageTitle } from '@/components/page'
import { Typography } from '@/components/ui/typography'

export default function SetupAuthPage() {
  return (
    <Page>
      <PageBackButton />
      <PageTitle>Setup Google Authentication</PageTitle>
      <ol className='ml-5 list-decimal space-y-6'>
        <li>
          Go to your{' '}
          <Link href='https://console.cloud.google.com/apis/credentials'>
            Google Cloud Console
          </Link>{' '}
          credentials screen
        </li>
        <li>Make sure the right project is selected</li>
        <li>
          Click the button to{' '}
          <span className='font-bold'>Create Credentials</span>, and select{' '}
          <span className='font-bold'>OAuth Client ID</span>
        </li>
        <li>
          If you haven&apos;t setup a{' '}
          <span className='font-bold'>Consent Screen</span>, it will prompt you
          to configure one
        </li>
        <li>
          For the Application Type select{' '}
          <span className='font-bold'>Web Application</span>
        </li>
        <li>
          For the name enter <span className='font-bold'>your app name</span> or{' '}
          <span className='font-bold'>Web App</span>
        </li>
        <li>
          Add <span className='font-bold'>Authorized Javascrcipt origins</span>
          <div className='mt-2'>
            <span className='inline-block w-20'>For dev:</span>
            <CodeBlock>http://localhost:3000</CodeBlock>
          </div>
          <div>
            <span className='inline-block w-20'>For prod:</span>
            <CodeBlock>https://yourdomain.com</CodeBlock>
          </div>
        </li>
        <li>
          Add <span className='font-bold'>Authorized redirect URIs</span>
          <div className='mt-2'>
            <span className='inline-block w-20'>For dev:</span>
            <CodeBlock>
              http://localhost:3000/api/auth/callback/google
            </CodeBlock>
          </div>
          <div>
            <span className='inline-block w-20'>For prod:</span>
            <CodeBlock>
              https://yourdomain.com/api/auth/callback/google
            </CodeBlock>
          </div>
        </li>
        <li>
          Click the <span className='font-bold'>Create</span> button
        </li>
        <li>
          Copy the <span className='font-bold'>Client ID</span> and{' '}
          <span className='font-bold'>Client Secret</span>
        </li>
        <li>
          Add your credentials to your <span className='font-bold'>.env</span>{' '}
          file:
          <Typography variant='codeBlock' className='mt-2'>
            AUTH_GOOGLE_ID=your_client_id
            <br />
            AUTH_GOOGLE_SECRET=your_client_secret
          </Typography>
        </li>
        <li>
          Uncomment the env variable checks in <CodeBlock>src/env.ts</CodeBlock>
        </li>
      </ol>
      <p className='mt-8 text-xl'>You can now login with Google on your app!</p>
    </Page>
  )
}

function Link({ children, ...props }: React.ComponentProps<'a'>) {
  return (
    <a
      className='text-primary/65 underline underline-offset-4'
      target='_blank'
      rel='noopener noreferrer'
      {...props}
    >
      {children}
    </a>
  )
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return <code className='bg-muted px-2 py-1'>{children}</code>
}

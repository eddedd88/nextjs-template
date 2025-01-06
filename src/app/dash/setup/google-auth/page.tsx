import { Page, PageBackButton, PageTitle } from '@/components/page'
import { Typography } from '@/components/ui/typography'

export default function SetupAuthPage() {
  return (
    <Page>
      <PageBackButton />
      <PageTitle>Setup Google Authentication</PageTitle>
      <ol className='ml-5 list-decimal space-y-6'>
        <li>Create a new project in the Google Cloud Console</li>
        <li>Enable the Google+ API</li>
        <li>Create OAuth 2.0 credentials (Client ID and Secret)</li>
        <li>
          Add your credentials to your .env.local file:
          <Typography variant='codeBlock'>
            AUTH_GOOGLE_ID=your_client_id
            <br />
            AUTH_GOOGLE_SECRET=your_client_secret
          </Typography>
        </li>
        <li>Configure your OAuth consent screen</li>
        <li>
          Add authorized redirect URIs:
          <Typography variant='codeBlock'>
            http://localhost:3000/api/auth/callback/google
          </Typography>
        </li>
        <li>
          Add Google provider to your Auth.js config:
          {/* <pre className="bg-gray-100 p-2 rounded-md mt-1 text-sm">
          providers: [
            GoogleProvider({
              clientId: process.env.GOOGLE_CLIENT_ID,
              clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            })
          ]
        </pre> */}
        </li>
      </ol>
    </Page>
  )
}

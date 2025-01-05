import { Button } from '@/components/ui/button'
import { ChevronLeftIcon } from 'lucide-react'
import Link from 'next/link'

export default function SetupAuthPage() {
  return (
    <div className='mx-auto max-w-xl animate-fade-in p-6 pt-24'>
      <div className='mt-8 animate-fade-in'>
        <Button size='sm' variant='ghost' asChild>
          <Link href='/dash'>
            <ChevronLeftIcon />
            Back
          </Link>
        </Button>
      </div>
      <div className='mt-8 animate-fade-in'>
        <h2 className='mb-6 text-2xl'>Setup Google Authentication</h2>
        <ol className='ml-5 list-decimal space-y-6'>
          <li>Create a new project in the Google Cloud Console</li>
          <li>Enable the Google+ API</li>
          <li>Create OAuth 2.0 credentials (Client ID and Secret)</li>
          <li className='rounded-md bg-gray-100 p-2'>
            Add to your .env: GOOGLE_CLIENT_ID=your_client_id
            GOOGLE_CLIENT_SECRET=your_client_secret
          </li>
          <li>Configure your OAuth consent screen</li>
          <li>
            Add authorized redirect URIs:
            <span className='mt-1 block text-sm text-gray-600'>
              http://localhost:3000/api/auth/callback/google
            </span>
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
      </div>
    </div>
  )
}

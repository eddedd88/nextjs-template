'use client' // Add 'use client'

import { LoginForm } from '@/components/login-form'
import Link from 'next/link'
import { COMPANY_NAME } from '@/constants'
import { useSession } from '@/lib/auth-client' // Import useSession
import { redirect } from 'next/navigation' // Import redirect
import { useEffect } from 'react' // Import useEffect for status check

export default function LoginPage() {
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === 'authenticated') {
      redirect('/dash')
    }
  }, [status])

  // Optional: Show a loading state while session status is being determined
  if (status === 'loading') {
    return (
      <div className='flex min-h-svh flex-col items-center justify-center gap-4 p-6 md:p-10'>
        <p>Loading...</p>
      </div>
    )
  }

  // Only render the login form if not authenticated
  if (status === 'unauthenticated') {
    return (
      <div className='flex min-h-svh flex-col items-center justify-center gap-4 p-6 md:p-10'>
        <Link href='/' className='text-2xl'>
          <span>Log in to {COMPANY_NAME}</span>
        </Link>
        <LoginForm />
      </div>
    )
  }

  // Fallback or if status is neither loading, authenticated, nor unauthenticated
  // (e.g. if redirect hasn't happened yet for authenticated state)
  return null
}

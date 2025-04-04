import { LoginForm } from '@/components/login-form'
import Link from 'next/link'
import { COMPANY_NAME } from '@/constants'

export default function LoginPage() {
  return (
    <div className='flex min-h-svh flex-col items-center justify-center gap-4 p-6 md:p-10'>
      <Link href='/' className='text-2xl'>
        <span>Log in to {COMPANY_NAME}</span>
      </Link>
      <LoginForm />
    </div>
  )
}

import { LoginForm } from './login-form'
import Link from 'next/link'
import { COMPANY_NAME } from '@/constants'
import { Logo } from '@/components/logo'

export default function LoginPage() {
  return (
    <div className='flex min-h-svh flex-col items-center justify-center gap-4 p-6 md:p-10'>
      <Link href='/'>
        <Logo className='mb-4' />
      </Link>
      <Link href='/' className='text-lg'>
        <span>Log in to {COMPANY_NAME}</span>
      </Link>
      <LoginForm />
    </div>
  )
}

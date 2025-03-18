import { GalleryVerticalEnd } from 'lucide-react'
import { LoginForm } from '@/components/login-form'
import Link from 'next/link'
import { COMPANY_NAME } from '@/constants'

export default function LoginPage() {
  return (
    <div className='bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10'>
      <Link href='/' className='flex items-center gap-3 text-xl'>
        <div className='bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-md'>
          <GalleryVerticalEnd className='size-4' />
        </div>
        Log in to {COMPANY_NAME}
      </Link>
      <LoginForm />
    </div>
  )
}

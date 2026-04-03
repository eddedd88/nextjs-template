'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function LoginForm() {
  const signInWith = async (strategy: 'google' | 'apple') => {
    console.log(`Signing in with ${strategy}`)
  }

  return (
    <div className='flex w-xs flex-col gap-3'>
      <SocialLoginButton onClick={() => signInWith('google')}>
        <GoogleLogo className='size-5' />
        Continue with Google
      </SocialLoginButton>
      <SocialLoginButton onClick={() => signInWith('apple')}>
        <svg
          className='mb-0.5'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <path
            d='M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701'
            fill='currentColor'
          />
        </svg>
        Continue with Apple
      </SocialLoginButton>
      <div className='mt-2 text-center text-xs text-balance text-muted-foreground [&_a]:underline [&_a]:underline-offset-4'>
        By clicking continue, you agree to our{' '}
        <Link href='/terms' className='hover:text-primary'>
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link href='/terms' className='hover:text-primary'>
          Privacy Policy
        </Link>
        .
      </div>
    </div>
  )
}

function SocialLoginButton({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <Button
      variant='outline'
      className='h-12 gap-3 text-base'
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 48 48'
      width='48px'
      height='48px'
      className={className}
    >
      <path
        fill='#FFC107'
        d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'
      />
      <path
        fill='#FF3D00'
        d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'
      />
      <path
        fill='#4CAF50'
        d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'
      />
      <path
        fill='#1976D2'
        d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'
      />
    </svg>
  )
}

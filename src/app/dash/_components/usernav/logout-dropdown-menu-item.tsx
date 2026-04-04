'use client'

import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Spinner } from '@/components/ui/spinner'
// import { useAuth } from '@clerk/nextjs'
import { LogOutIcon } from 'lucide-react'
import { useState } from 'react'

export function LogoutDropdownMenuItem() {
  // const { signOut } = useAuth()
  const [isSigningOut, setIsSigningOut] = useState(false)

  return (
    <DropdownMenuItem
      onClick={() => {
        setIsSigningOut(true)
        console.log('Signing out...')
        // signOut({
        //   redirectUrl: '/',
        // })
      }}
      disabled={isSigningOut}
      onSelect={e => e.preventDefault()}
    >
      {isSigningOut ? <Spinner /> : <LogOutIcon />}
      Logout
    </DropdownMenuItem>
  )
}

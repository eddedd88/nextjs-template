'use client'

import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Spinner } from '@/components/ui/spinner'
import { LogOutIcon } from 'lucide-react'
import { useState } from 'react'

export function LogoutDropdownMenuItem() {
  const [isSigningOut, setIsSigningOut] = useState(false)

  return (
    <DropdownMenuItem
      onClick={() => {
        setIsSigningOut(true)
        console.log('Signing out...')
      }}
      disabled={isSigningOut}
      closeOnClick={false}
    >
      {isSigningOut ? <Spinner /> : <LogOutIcon />}
      Logout
    </DropdownMenuItem>
  )
}

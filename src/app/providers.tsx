'use client'

import { ConvexReactClient } from 'convex/react'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { ReactNode } from 'react'
import { useAuth, ClerkProvider } from '@clerk/nextjs'
// import { clientEnv } from '@/env/client-env'

// const convex = new ConvexReactClient(clientEnv.NEXT_PUBLIC_CONVEX_URL)
const convex = new ConvexReactClient('')

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}

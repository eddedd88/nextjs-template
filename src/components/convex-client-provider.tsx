'use client'

import { ReactNode } from 'react'
// import { ConvexReactClient } from 'convex/react'
// import { ConvexProviderWithClerk } from 'convex/react-clerk'
// import { ClerkProvider, useAuth } from '@clerk/nextjs'
// import { clientEnv } from '@/env/client-env'

// const convex = new ConvexReactClient(clientEnv.NEXT_PUBLIC_CONVEX_URL)

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return children
  // return (
  //   <ClerkProvider signInUrl='/login'>
  //     <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
  //       {children}
  //     </ConvexProviderWithClerk>
  //   </ClerkProvider>
  // )
}

'use client'

import { useEffect, useState } from 'react'

interface ClientOnlyProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function ClientOnly({ children, fallback }: ClientOnlyProps) {
  const [isClientReady, setIsClientReady] = useState(false)

  useEffect(() => {
    setIsClientReady(true)
  }, [])

  if (!isClientReady) {
    return fallback || null
  }

  return children
}

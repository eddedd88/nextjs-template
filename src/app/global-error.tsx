'use client'

import { PageError, PageErrorProps } from '@/components/page-error'

export default function GlobalError(props: PageErrorProps) {
  return (
    <html>
      <body className='flex h-screen w-screen items-center justify-center'>
        <PageError {...props} />
      </body>
    </html>
  )
}

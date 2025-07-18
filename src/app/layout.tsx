import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
// import { Providers } from './providers'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Nitro | SAAS Launcher',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${inter.variable} antialiased`}>
      <body>
        {/* <Providers> */}
        {children}
        {/* </Providers> */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

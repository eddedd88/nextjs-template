import { ConvexClientProvider } from './convex-client-provider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ConvexClientProvider>{children}</ConvexClientProvider>
}

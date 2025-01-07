import type { Metadata } from 'next'

import { Banner } from '@/components/banner'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Task Detail',
  description: 'Detailed task page',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <Banner />
      {children}
      <Footer />
    </div>
  )
}

import '@/styles/globals.css'
import { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import clsx from 'clsx'

import { Providers } from './providers'

import { fontSans } from '@/config/fonts'
import ThemeSetter from '@/common/utils/ThemeSetter'
import NavbarComponent from '@/components/Navbar/Navbar'

export const metadata: Metadata = {
  title: {
    default: 'Lessons Schedule',
    template: `%s - Lessons Schedule`
  },
  description: `Schedule of lessons for students of the Faculty of Information Technology and Computer Engineering of the National Technical University of Ukraine "Igor Sikorsky Kyiv Polytechnic Institute`,
  icons: {
    icon: '/favicon.ico'
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Analytics />
        <Providers>
          <ThemeSetter />
          <div className="relative flex flex-col h-screen">
            <NavbarComponent />
            <main className="container mx-auto px-6 flex-grow">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}

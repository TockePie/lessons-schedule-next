import { disableReactDevTools } from '@fvilers/disable-react-devtools'
import { Toaster } from '@ui/sonner'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import Providers from './providers'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Lessons Schedule',
  description: 'A simple schedule for lessons'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  if (process.env.NODE_ENV === 'production') {
    disableReactDevTools()
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          geistSans.variable,
          geistMono.variable,
          'h-screen antialiased dark:bg-black'
        )}
      >
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}

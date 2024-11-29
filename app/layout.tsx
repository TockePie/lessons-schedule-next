import { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import clsx from 'clsx'

import NavbarComponent from '@/components/Navbar/Navbar'
import { fontSans } from '@/config/fonts'
import { Providers } from '@/app/providers'
import { LAYOUT_TEXTS } from '@/common/constants/texts'

import '@/styles/globals.css'

const metadata: Metadata = {
  title: {
    default: LAYOUT_TEXTS.title.default,
    template: LAYOUT_TEXTS.title.template
  },
  description: LAYOUT_TEXTS.description,
  icons: {
    icon: '/favicon.ico'
  }
}

const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
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
          <div className="relative flex h-screen flex-col">
            <NavbarComponent />
            <main className="container mx-auto flex-grow px-6">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
export { viewport, metadata }

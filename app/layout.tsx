import { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import clsx from 'clsx'

import { fontSans } from '@/config/fonts'
import NavbarComponent from '@/components/Navbar/Navbar'

import { Providers } from './providers'
import styles from '@/app/layout.module.scss'
import '@/styles/globals.css'

const metadata: Metadata = {
  title: {
    default: 'Lessons Schedule',
    template: `%s - Lessons Schedule`
  },
  description: `Schedule of lessons for students of the Faculty of Information Technology and Computer Engineering of the National Technical University of Ukraine "Igor Sikorsky Kyiv Polytechnic Institute`,
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
      <body className={clsx(styles.body, fontSans.variable)}>
        <Analytics />
        <Providers>
          <div className={styles.content}>
            <NavbarComponent />
            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
export { viewport, metadata }

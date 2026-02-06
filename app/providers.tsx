'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { CurrentDateProvider } from '@/common/context/current-date'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <CurrentDateProvider>{children}</CurrentDateProvider>
    </NextThemesProvider>
  )
}

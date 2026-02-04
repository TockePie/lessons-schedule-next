'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { CurrentDateProvider } from '@/common/context/current-date'
import { WeekParityProvider } from '@/common/context/week-parity'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <WeekParityProvider>
        <CurrentDateProvider>{children}</CurrentDateProvider>
      </WeekParityProvider>
    </NextThemesProvider>
  )
}

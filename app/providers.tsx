import React, { ReactNode } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { WeekParityProvider } from '@/common/context/week-parity'

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <WeekParityProvider>{children}</WeekParityProvider>
    </NextThemesProvider>
  )
}

export default Providers

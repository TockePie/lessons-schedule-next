import React, { ReactNode } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  )
}

export default Providers

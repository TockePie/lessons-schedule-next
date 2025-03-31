'use client'

import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { WeekParityProvider } from '@/common/context/week-parity'

const queryClient = new QueryClient()

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        <WeekParityProvider>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </WeekParityProvider>
      </NextThemesProvider>
    </QueryClientProvider>
  )
}

export default Providers

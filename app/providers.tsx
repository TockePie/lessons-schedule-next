'use client'

import * as React from 'react'
import { NextUIProvider } from '@nextui-org/system'
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

import { WeekParityProvider } from '@/common/providers/weekParity'
import { GroupProvider } from '@/common/providers/group'

export interface ProvidersProps {
  children: React.ReactNode
  themeProps?: ThemeProviderProps
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter()

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        {...themeProps}
      >
        <WeekParityProvider>
          <GroupProvider>{children}</GroupProvider>
        </WeekParityProvider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}

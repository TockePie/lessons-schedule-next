'use client'

import * as React from 'react'
import { NextUIProvider } from '@nextui-org/system'
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { WeekParityProvider } from '@/common/providers/weekParity'
import { GroupProvider } from '@/common/providers/group'

interface ProvidersProps {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  const router = useRouter()

  return (
    <NextThemesProvider attribute="class" defaultTheme="system">
      <NextUIProvider navigate={router.push}>
        <WeekParityProvider>
          <GroupProvider>{children}</GroupProvider>
        </WeekParityProvider>
      </NextUIProvider>
    </NextThemesProvider>
  )
}

export { Providers }
export type { ProvidersProps }

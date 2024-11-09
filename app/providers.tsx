import * as React from 'react'
import { NextUIProvider } from '@nextui-org/system'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { cookies } from 'next/headers'

import { WeekParityProvider } from '@/common/providers/weekParity'
import { GroupProvider } from '@/common/providers/group'

const Providers = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = await cookies()
  const initialGroupId = cookieStore.get('groupId')?.value || null

  return (
    <NextThemesProvider attribute="class" defaultTheme="system">
      <NextUIProvider>
        <WeekParityProvider>
          <GroupProvider initialGroupId={initialGroupId}>
            {children}
          </GroupProvider>
        </WeekParityProvider>
      </NextUIProvider>
    </NextThemesProvider>
  )
}

export { Providers }

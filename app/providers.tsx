import { ReactNode } from 'react'
import { NextUIProvider } from '@nextui-org/system'
import { cookies } from 'next/headers'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { GroupProvider } from '@/common/providers/group'
import { WeekParityProvider } from '@/common/providers/weekParity'

async function Providers({ children }: { children: ReactNode }) {
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

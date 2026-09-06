'use client'

import { createContext, useContext } from 'react'

import { useCurrentDate } from '@/hooks/use-current-date'
import { CurrentDateContextValue } from '@/types/current-date'

const CurrentDateContext = createContext<CurrentDateContextValue | undefined>(
  undefined
)

export function CurrentDateProvider({
  children
}: {
  children: React.ReactNode
}) {
  const value = useCurrentDate()

  return (
    <CurrentDateContext.Provider value={value}>
      {children}
    </CurrentDateContext.Provider>
  )
}

export default function useCurrent() {
  const context = useContext(CurrentDateContext)
  if (!context) throw new Error('CurrentDayContext is not provided')
  return context
}

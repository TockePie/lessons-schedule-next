'use client'

import { createContext, useContext } from 'react'

import { useCurrentDate } from './hooks/use-current-date'
import { CurrentDay } from './types/current-day'

interface CurrentDateContextValue {
  currentDate: Date
  currentDay: CurrentDay
  minutesSinceMidnight: number
}

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

export function useCurrent() {
  const context = useContext(CurrentDateContext)
  if (!context) throw new Error('CurrentDayContext is not provided')
  return context
}

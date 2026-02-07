'use client'

import { createContext, useContext } from 'react'
import { getISODay } from 'date-fns'

import useCurrentDate from '@/hooks/use-current-date'
import { CurrentDateContextValue, CurrentDay } from '@/types/current-date'

const CurrentDateContext = createContext<CurrentDateContextValue | undefined>(
  undefined
)

export function CurrentDateProvider({
  children
}: {
  children: React.ReactNode
}) {
  const currentDate = useCurrentDate()
  const currentDay = getISODay(currentDate) as CurrentDay
  const minutesSinceMidnight =
    currentDate.getHours() * 60 + currentDate.getMinutes()

  return (
    <CurrentDateContext.Provider
      value={{ currentDate, currentDay, minutesSinceMidnight }}
    >
      {children}
    </CurrentDateContext.Provider>
  )
}

export default function useCurrent() {
  const context = useContext(CurrentDateContext)
  if (!context) throw new Error('CurrentDayContext is not provided')
  return context
}

'use client'

import { createContext, useContext, useState } from 'react'

import { WeekParityContextValue } from '@/types/week-parity'
import getWeekParity from '@/utils/get-week-parity'

const WeekParityContext = createContext<WeekParityContextValue | undefined>(
  undefined
)

export function WeekParityProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [weekParity, setWeekParity] = useState(getWeekParity())

  return (
    <WeekParityContext.Provider value={{ weekParity, setWeekParity }}>
      {children}
    </WeekParityContext.Provider>
  )
}

export default function useWeekParity() {
  const context = useContext(WeekParityContext)
  if (!context) throw new Error('WeekParityContext is not provided')
  return context
}

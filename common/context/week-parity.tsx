'use client'

import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState
} from 'react'
import { getISOWeek } from 'date-fns'

import { WeekParity, WeekParityContextValue } from '@/types/week-parity'

const WeekParityContext = createContext<WeekParityContextValue | undefined>(
  undefined
)

const WeekParityProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [weekParity, setWeekParity] = useState<WeekParity>(
    getISOWeek(new Date()) % 2 === 0 ? 'even' : 'odd'
  )

  return (
    <WeekParityContext.Provider value={{ weekParity, setWeekParity }}>
      {children}
    </WeekParityContext.Provider>
  )
}

const useWeekParity = () => {
  const context = useContext(WeekParityContext)
  if (!context) throw new Error('WeekParityContext is not provided')
  return context
}

export default useWeekParity
export { WeekParityProvider }

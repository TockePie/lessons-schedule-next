'use client'

import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useContext,
  useState,
  SetStateAction
} from 'react'
import { getISOWeek } from 'date-fns'

interface ContextProps {
  weekParity: 'even' | 'odd'
  setWeekParity: Dispatch<SetStateAction<'even' | 'odd'>>
}

const WeekParityContext = createContext<ContextProps | undefined>(undefined)

const WeekParityProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const date = new Date()
  const numberOfWeek = getISOWeek(date)
  const weekParityState = numberOfWeek % 2 === 0 ? 'even' : 'odd'

  const [weekParity, setWeekParity] =
    useState<ContextProps['weekParity']>(weekParityState)

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

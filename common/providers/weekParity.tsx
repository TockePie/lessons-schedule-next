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

const WeekParityContext = createContext<
  | {
      weekParity: 'even' | 'odd'
      setWeekParity: Dispatch<SetStateAction<'even' | 'odd'>>
    }
  | undefined
>(undefined)

const WeekParityProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [weekParity, setWeekParity] = useState<'even' | 'odd'>(
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

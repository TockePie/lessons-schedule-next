import React, { createContext } from 'react'
import { getISODay } from 'date-fns'

import useCurrentDate from '@/hooks/use-current-date'
import { CurrentDateContextValue, CurrentDay } from '@/types/current-date'

const CurrentDateContext = createContext<CurrentDateContextValue | undefined>(
  undefined
)

const CurrentDateProvider = ({ children }: { children: React.ReactNode }) => {
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

const useCurrent = () => {
  const context = React.useContext(CurrentDateContext)
  if (!context) throw new Error('CurrentDayContext is not provided')
  return context
}

export default useCurrent
export { CurrentDateProvider }

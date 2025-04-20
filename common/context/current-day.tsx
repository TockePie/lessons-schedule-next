import React, { createContext, ReactNode, useState } from 'react'

import { CurrentDayContextValue } from '@/types/days'
import currentDayTime from '@/utils/current-day-time'

const CurrentDayContext = createContext<CurrentDayContextValue | undefined>(
  undefined
)

const CurrentDayProvider = ({ children }: { children: ReactNode }) => {
  const [currentDay, setCurrentDay] = useState(currentDayTime().currentDay)

  return (
    <CurrentDayContext.Provider value={{ currentDay, setCurrentDay }}>
      {children}
    </CurrentDayContext.Provider>
  )
}

const useCurrentDay = () => {
  const context = React.useContext(CurrentDayContext)
  if (!context) throw new Error('CurrentDayContext is not provided')
  return context
}

export default useCurrentDay
export { CurrentDayProvider }

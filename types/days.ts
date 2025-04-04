import { Dispatch, SetStateAction } from 'react'

type CurrentDay = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7

interface CurrentDayContextValue {
  currentDay: CurrentDay
  setCurrentDay: Dispatch<SetStateAction<CurrentDay>>
}

export { type CurrentDay, type CurrentDayContextValue }

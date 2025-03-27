import { Dispatch, SetStateAction } from 'react'

type WeekParity = 'even' | 'odd'

interface WeekParityContextValue {
  weekParity: WeekParity
  setWeekParity: Dispatch<SetStateAction<WeekParity>>
}

export { type WeekParity, type WeekParityContextValue }

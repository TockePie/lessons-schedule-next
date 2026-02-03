import { Dispatch, SetStateAction } from 'react'

export type WeekParity = 'even' | 'odd'

export interface WeekParityContextValue {
  weekParity: WeekParity
  setWeekParity: Dispatch<SetStateAction<WeekParity>>
}

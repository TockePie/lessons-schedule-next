import { getISOWeek } from 'date-fns'

import { WeekParity } from '@/types/week-parity'

export default function getWeekParity(): WeekParity {
  const currentDate = new Date()
  const currentWeek = getISOWeek(currentDate)

  const weekParity = currentWeek % 2 === 0 ? 'even' : 'odd'

  return weekParity
}

import { getISODay } from 'date-fns'

import { DayOfWeek } from '../types/day-of-week'

export function getCurrentDayOfWeek(date: Date) {
  return getISODay(date) as DayOfWeek
}

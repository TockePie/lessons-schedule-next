import { getISODay } from 'date-fns'

import { DayOfWeek } from '../types/current-day'

export function getCurrentDayOfWeek(date: Date) {
  return getISODay(date) as DayOfWeek
}

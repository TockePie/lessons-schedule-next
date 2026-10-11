import { getISOWeek } from 'date-fns'

import { WeekParity } from '../types/week-parity'

export function getWeekParity(date: Date = new Date()) {
  return (getISOWeek(date) % 2 === 0 ? 'even' : 'odd') satisfies WeekParity
}

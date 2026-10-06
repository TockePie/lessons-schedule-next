import { getISOWeek } from 'date-fns'

export function getWeekParity() {
  const date = new Date()
  const currentWeek = getISOWeek(date)

  return currentWeek % 2 === 0 ? 'even' : 'odd'
}

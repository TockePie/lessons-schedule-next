import { getISOWeek } from 'date-fns'

export function getServerTime() {
  const date = new Date()
  const currentWeek = getISOWeek(date)

  return {
    serverTime: date.toISOString(),
    weekParity: currentWeek % 2 === 0 ? 'even' : 'odd'
  } as const
}

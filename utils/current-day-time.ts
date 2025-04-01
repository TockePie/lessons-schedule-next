import { getISODay } from 'date-fns'

const currentDayTime = (): {
  currentDay: number
  minutesSinceMidnight: number
} => {
  const currentDay = getISODay(new Date())

  const now = new Date()
  const minutesSinceMidnight = now.getHours() * 60 + now.getMinutes()

  return { currentDay, minutesSinceMidnight }
}

export default currentDayTime

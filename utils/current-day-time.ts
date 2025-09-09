import { getISODay } from 'date-fns'

import { CurrentDayContextValue } from '@/types/days'

const currentDayTime = (): {
  currentDay: CurrentDayContextValue['currentDay']
  minutesSinceMidnight: number
} => {
  const currentDay = getISODay(
    new Date()
  ) as CurrentDayContextValue['currentDay']

  const now = new Date()
  const minutesSinceMidnight = now.getHours() * 60 + now.getMinutes()

  console.log({ currentDay, now, minutesSinceMidnight })

  return { currentDay, minutesSinceMidnight }
}

export default currentDayTime

import { Schedule } from '../types/schedule'

export function divideSchedule(scheduleData: Schedule) {
  const scheduleEven: typeof scheduleData = []
  const scheduleOdd: typeof scheduleData = []

  for (const item of scheduleData) {
    if (item.week_parity === 'EVEN' || item.week_parity === 'BOTH') {
      scheduleEven.push(item)
    }
    if (item.week_parity === 'ODD' || item.week_parity === 'BOTH') {
      scheduleOdd.push(item)
    }
  }

  return { scheduleEven, scheduleOdd }
}

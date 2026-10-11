import { Schedule } from '../types/schedule'

export function divideSchedule(scheduleData: Schedule) {
  const evenItems: Schedule = []
  const oddItems: Schedule = []

  for (const item of scheduleData) {
    if (item.week_parity === 'EVEN' || item.week_parity === 'BOTH') {
      evenItems.push(item)
    }
    if (item.week_parity === 'ODD' || item.week_parity === 'BOTH') {
      oddItems.push(item)
    }
  }

  return {
    even: evenItems,
    odd: oddItems
  }
}

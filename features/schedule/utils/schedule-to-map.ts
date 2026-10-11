import { ProcessedSchedule } from '../types/processed-schedule'
import { Schedule } from '../types/schedule'

export function scheduleToMap(items: Schedule) {
  const itemsMap = new Map<string, Schedule>()
  let lastRow = 0

  for (const item of items) {
    if (item.row > lastRow) {
      lastRow = item.row
    }

    const key = `${item.row}-${item.day}`
    const existing = itemsMap.get(key)
    if (existing) {
      existing.push(item)
    } else {
      itemsMap.set(key, [item])
    }
  }

  return {
    items: itemsMap,
    lastRow
  } satisfies ProcessedSchedule
}

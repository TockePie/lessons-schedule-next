import lessonNumber from '@/common/constants/lesson-number'
import { CurrentDay } from '@/types/current-date'
import { WeekParityType } from '@/types/entities/schedule'

import getWeekParity from './get-week-parity'

const isCurrentLesson = (
  day: number,
  row: number,
  week: WeekParityType,
  currentDay: CurrentDay,
  minutesSinceMidnight: number
): boolean => {
  const weekParity = getWeekParity()
  if (week.toLowerCase() !== weekParity && week !== 'BOTH') return false

  if (currentDay !== day) return false

  const lessonTiming = lessonNumber.find((lesson) => lesson.row === row)
  if (!lessonTiming) return false

  return (
    minutesSinceMidnight >= lessonTiming.beginTime &&
    minutesSinceMidnight <= lessonTiming.endTime
  )
}

export default isCurrentLesson

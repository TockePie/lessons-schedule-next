import { WeekParity } from '@/features/schedule'
import { CurrentDay, getWeekParity } from '@/features/time'

import { LESSON_NUMBER } from '../constants/lesson-number'

const isCurrentLesson = (
  day: number,
  row: number,
  week: WeekParity,
  currentDay: CurrentDay,
  minutesSinceMidnight: number
): boolean => {
  const weekParity = getWeekParity()
  if (week.toLowerCase() !== weekParity && week !== 'BOTH') return false

  if (currentDay !== day) return false

  const lessonTiming = LESSON_NUMBER.find((lesson) => lesson.row === row)
  if (!lessonTiming) return false

  return (
    minutesSinceMidnight >= lessonTiming.beginTime &&
    minutesSinceMidnight <= lessonTiming.endTime
  )
}

export default isCurrentLesson

import { SubjectWeekParity } from '@/features/schedule'
import { DayOfWeek, getWeekParity } from '@/features/time'

import { LESSON_SLOTS } from '../constants/lesson-number'

const isCurrentLesson = (
  day: number,
  row: number,
  week: SubjectWeekParity,
  currentDay: DayOfWeek,
  minutesSinceMidnight: number
): boolean => {
  const weekParity = getWeekParity()
  if (week.toLowerCase() !== weekParity && week !== 'BOTH') return false

  if (currentDay !== day) return false

  const lessonTiming = LESSON_SLOTS.find((lesson) => lesson.row === row)
  if (!lessonTiming) return false

  return (
    minutesSinceMidnight >= lessonTiming.beginTime &&
    minutesSinceMidnight <= lessonTiming.endTime
  )
}

export default isCurrentLesson

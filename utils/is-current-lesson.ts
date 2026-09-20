import { LESSON_NUMBER } from '@/common/constants/lesson-number'
import { WeekParity } from '@/features/schedule/types/schedule'
import { CurrentDay, getServerTime } from '@/features/time'

const isCurrentLesson = (
  day: number,
  row: number,
  week: WeekParity,
  currentDay: CurrentDay,
  minutesSinceMidnight: number
): boolean => {
  const weekParity = getServerTime().weekParity
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

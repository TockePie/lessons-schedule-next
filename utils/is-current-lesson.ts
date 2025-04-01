import lessonNumber from '@/common/constants/lesson-number'
import { ScheduleProps } from '@/types/schedule'

import currentDayTime from './current-day-time'

const isCurrentLesson = (
  day: ScheduleProps['day'],
  row: ScheduleProps['row']
): boolean => {
  const dayTimeInfo = currentDayTime()
  const currentTimeInMinutes = dayTimeInfo.minutesSinceMidnight

  if (dayTimeInfo.currentDay !== day) return false

  const lessonTiming = lessonNumber.find((lesson) => lesson.row === row)

  if (!lessonTiming) return false

  return (
    currentTimeInMinutes >= lessonTiming.beginTime &&
    currentTimeInMinutes <= lessonTiming.endTime
  )
}

export default isCurrentLesson

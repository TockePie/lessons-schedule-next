'use client'

import { TableCell } from '@ui/table'

import { LessonCard, MultipleCard } from '@/features/card'
import { ProcessedSchedule } from '@/features/schedule'
import {
  DayOfWeek,
  getCurrentDayOfWeek,
  getMinutesSinceMidnight,
  useCurrentDateContext
} from '@/features/time'

import { STUDY_DAYS } from '../constants/days-of-week'
import isCurrentLesson from '../lib/is-current-lesson'
import openLesson from '../lib/open-lesson'

interface Props {
  time: {
    row: number
    beginTime: number
    endTime: number
    name: string
  }
  scheduleData: ProcessedSchedule
  selectedDay?: DayOfWeek
}

export default function CellBlock({ time, scheduleData, selectedDay }: Props) {
  const currentDate = useCurrentDateContext()
  const currentDayOfWeek = getCurrentDayOfWeek(currentDate)
  const minutesSinceMidnight = getMinutesSinceMidnight(currentDate)

  return STUDY_DAYS.map((day) => {
    if (selectedDay && selectedDay !== day.id) return null

    const items = scheduleData.items.get(`${time.row}-${day.id}`) ?? []

    if (items.length === 0) {
      return <TableCell key={`day-${day.id}`} className="text-center" />
    }

    if (items.length > 1) {
      return (
        <TableCell key={`day-${day.id}`} className="text-center">
          <MultipleCard
            key={`day-${day.id}`}
            length={items.length}
            isCurrent={isCurrentLesson(
              day.id,
              time.row,
              items[0].week_parity,
              currentDayOfWeek,
              minutesSinceMidnight
            )}
          >
            {items.map((item) => (
              <LessonCard
                {...item.subject}
                key={item.id}
                onClick={openLesson(item.subject.url)}
                isCurrent={false}
              />
            ))}
          </MultipleCard>
        </TableCell>
      )
    }

    return (
      <TableCell key={`day-${day.id}`} className="text-center">
        {items.map((item, index) => (
          <LessonCard
            key={`${day.id}-${time.row}-${index}`}
            title={item.subject.title}
            type={item.subject.type}
            teacher={item.subject.teacher}
            url={item.subject.url}
            isCurrent={isCurrentLesson(
              item.day,
              item.row,
              item.week_parity,
              currentDayOfWeek,
              minutesSinceMidnight
            )}
            onClick={openLesson(item.subject.url)}
          />
        ))}
      </TableCell>
    )
  })
}

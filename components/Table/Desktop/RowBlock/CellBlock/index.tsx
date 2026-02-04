'use client'

import { TableCell } from '@ui/table'

import { DAY_OF_WEEK } from '@/common/constants/day-of-the-week'
import useCurrent from '@/common/context/current-date'
import LessonCard from '@/components/Card/lesson-card'
import MultipleCard from '@/components/MultipleCard'
import { ScheduleEntityType } from '@/types/entities/schedule'
import isCurrentLesson from '@/utils/is-current-lesson'
import openLesson from '@/utils/open-lesson'

interface Props {
  time: {
    row: number
    beginTime: number
    endTime: number
    name: string
  }
  scheduleData: ScheduleEntityType[]
}

export default function CellBlock({ time, scheduleData }: Props) {
  const { currentDay, minutesSinceMidnight } = useCurrent()

  return DAY_OF_WEEK.map((day) => {
    if (day.id === 0) return

    const items = Array.isArray(scheduleData)
      ? scheduleData.filter((e) => e.row === time.row && e.day === day.id)
      : []

    if (items.length === 0) {
      return <TableCell key={`day-${day.id}`} className="text-center" />
    }

    if (items.length > 1) {
      return (
        <TableCell key={`day-${day.id}`} className="text-center">
          <MultipleCard
            key={`day-${day.id}`}
            data={items}
            length={items.length}
            isCurrent={isCurrentLesson(
              day.id,
              time.row,
              items[0].week_parity,
              currentDay,
              minutesSinceMidnight
            )}
          />
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
              currentDay,
              minutesSinceMidnight
            )}
            actionFn={openLesson(item.subject.url)}
          />
        ))}
      </TableCell>
    )
  })
}

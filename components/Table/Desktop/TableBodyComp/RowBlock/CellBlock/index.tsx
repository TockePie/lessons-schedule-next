import React, { ReactNode } from 'react'
import { TableCell } from '@ui/table'

import dayOfWeek from '@/common/constants/day-of-the-week'
import Card from '@/components/Card'
import MultipleCard from '@/components/MultipleCard'
import { ScheduleProps } from '@/types/schedule'
import isCurrentLesson from '@/utils/is-current-lesson'

const CellBlock = (
  time: {
    row: number
    beginTime: number
    endTime: number
    name: string
  },
  scheduleData: ScheduleProps[]
): ReactNode => {
  return dayOfWeek.map((day) => {
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
              day.id as ScheduleProps['day'],
              time.row as ScheduleProps['row'],
              items[0].week_parity as ScheduleProps['week_parity']
            )}
          />
        </TableCell>
      )
    }

    return (
      <TableCell key={`day-${day.id}`} className="text-center">
        {items.map((item, index) => (
          <Card
            key={`${day.id}-${time.row}-${index}`}
            title={item.title}
            type={item.type}
            teacher={item.teacher}
            url={item.url}
            isCurrent={isCurrentLesson(item.day, item.row, item.week_parity)}
          />
        ))}
      </TableCell>
    )
  })
}

export default CellBlock

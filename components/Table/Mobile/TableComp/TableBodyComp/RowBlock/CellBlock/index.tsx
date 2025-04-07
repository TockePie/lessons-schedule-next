import React, { ReactNode } from 'react'
import { TableCell } from '@ui/table'

import dayOfWeek from '@/common/constants/day-of-the-week'
import useCurrentDay from '@/common/context/current-day'
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
  const { currentDay } = useCurrentDay()

  return dayOfWeek.map((day) => {
    const matchingItems = scheduleData.filter(
      (item) => item.day === day.id && item.row === time.row
    )

    if (currentDay !== day.id) return null

    if (matchingItems.length === 0) {
      return <TableCell key={`day-${day.id}`} className="text-center" />
    }

    const itemToDisplay = matchingItems[0]

    if (matchingItems.length > 1) {
      return (
        <TableCell key={`day-${day.id}`} className="text-center">
          <MultipleCard
            key={`day-${day.id}`}
            data={matchingItems}
            length={matchingItems.length}
            isCurrent={isCurrentLesson(
              day.id as ScheduleProps['day'],
              time.row as ScheduleProps['row']
            )}
          />
        </TableCell>
      )
    }

    return (
      <TableCell key={`day-${day.id}`} className="text-center">
        <Card
          key={`${day.id}-${time.row}`}
          title={itemToDisplay.title}
          type={itemToDisplay.type}
          teacher={itemToDisplay.teacher}
          url={itemToDisplay.url}
          isCurrent={isCurrentLesson(itemToDisplay.day, itemToDisplay.row)}
        />
      </TableCell>
    )
  })
}

export default CellBlock

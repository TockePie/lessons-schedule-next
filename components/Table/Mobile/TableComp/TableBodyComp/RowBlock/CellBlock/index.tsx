import React, { FC, useContext } from 'react'
import { TableCell } from '@ui/table'

import dayOfWeek from '@/common/constants/day-of-the-week'
import useCurrent from '@/common/context/current-date'
import LessonCard from '@/components/Card/lesson-card'
import MultipleCard from '@/components/MultipleCard'
import { DayContext } from '@/components/Table/Mobile'
import { ScheduleEntityType } from '@/types/entities/schedule'
import isCurrentLesson from '@/utils/is-current-lesson'
import openLesson from '@/utils/open-lesson'

interface CellBlockProps {
  time: {
    row: number
    beginTime: number
    endTime: number
    name: string
  }
  scheduleData: ScheduleEntityType[]
}

const CellBlock: FC<CellBlockProps> = ({ time, scheduleData }) => {
  const manualDay = useContext(DayContext)
  const { currentDay, minutesSinceMidnight } = useCurrent()

  return (
    <>
      {dayOfWeek.map((day) => {
        const matchingItems = scheduleData.filter(
          (item) => item.day === day.id && item.row === time.row
        )

        if (manualDay !== day.id) return null

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
                  day.id,
                  time.row,
                  matchingItems[0].week_parity,
                  currentDay,
                  minutesSinceMidnight
                )}
              />
            </TableCell>
          )
        }

        return (
          <TableCell key={`day-${day.id}`} className="text-center">
            <LessonCard
              key={`${day.id}-${time.row}`}
              title={itemToDisplay.subject.title}
              type={itemToDisplay.subject.type}
              teacher={itemToDisplay.subject.teacher}
              url={itemToDisplay.subject.url}
              isCurrent={isCurrentLesson(
                itemToDisplay.day,
                itemToDisplay.row,
                itemToDisplay.week_parity,
                currentDay,
                minutesSinceMidnight
              )}
              actionFn={openLesson(itemToDisplay.subject.url)}
            />
          </TableCell>
        )
      })}
    </>
  )
}

export default CellBlock

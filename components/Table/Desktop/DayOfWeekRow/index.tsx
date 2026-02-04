'use client'

import { TableHead } from '@ui/table'
import clsx from 'clsx'

import dayOfWeek from '@/common/constants/day-of-the-week'
import useCurrent from '@/common/context/current-date'

export default function DayOfWeekRow() {
  const { currentDay } = useCurrent()

  return dayOfWeek.map((day) => {
    if (day.id === 0) return null

    return (
      <TableHead
        key={day.id}
        className={clsx(
          'text-center',
          currentDay === day.id && 'bg-neutral-200 dark:bg-neutral-800'
        )}
      >
        {day.name}
      </TableHead>
    )
  })
}

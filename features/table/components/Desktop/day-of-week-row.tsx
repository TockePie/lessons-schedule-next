'use client'

import { TableHead } from '@ui/table'
import { cx } from 'class-variance-authority'

import { getCurrentDayOfWeek, useCurrentDateContext } from '@/features/time'

import { DAY_OF_WEEK } from '../../constants/day-of-the-week'

export default function DayOfWeekRow() {
  const currentDate = useCurrentDateContext()
  const currentDayOfWeek = getCurrentDayOfWeek(currentDate)

  return DAY_OF_WEEK.map((day) => {
    if (day.id === 0) return null

    return (
      <TableHead
        key={day.id}
        className={cx(
          'text-center',
          currentDayOfWeek === day.id && 'bg-neutral-200 dark:bg-neutral-800'
        )}
      >
        {day.name}
      </TableHead>
    )
  })
}

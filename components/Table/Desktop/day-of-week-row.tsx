'use client'

import { TableHead } from '@ui/table'
import { cx } from 'class-variance-authority'

import { DAY_OF_WEEK } from '@/common/constants/day-of-the-week'
import { useCurrent } from '@/features/time'

export default function DayOfWeekRow() {
  const { currentDay } = useCurrent()

  return DAY_OF_WEEK.map((day) => {
    if (day.id === 0) return null

    return (
      <TableHead
        key={day.id}
        className={cx(
          'text-center',
          currentDay === day.id && 'bg-neutral-200 dark:bg-neutral-800'
        )}
      >
        {day.name}
      </TableHead>
    )
  })
}

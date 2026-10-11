'use client'

import { TableHead } from '@ui/table'
import { cx } from 'class-variance-authority'

import { getCurrentDayOfWeek, useCurrentDateContext } from '@/features/time'

import { STUDY_DAYS } from '../../constants/days-of-week'

export default function DaysHeaderCells() {
  const currentDate = useCurrentDateContext()
  const currentDayOfWeek = getCurrentDayOfWeek(currentDate)

  return STUDY_DAYS.map((day) => (
    <TableHead
      key={day.id}
      className={cx(
        'text-center',
        currentDayOfWeek === day.id && 'bg-neutral-200 dark:bg-neutral-800'
      )}
    >
      {day.nameUk}
    </TableHead>
  ))
}

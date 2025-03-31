import React, { Key, useState } from 'react'
import clsx from 'clsx'
import { getDay } from 'date-fns'

import { TableHead } from '@/components/ui/table'

import dayOfWeek from '../common/day-of-the-week'

const DayOfWeekRow = () => {
  const [dayNumber] = useState(getDay(new Date()))

  return (
    <>
      {dayOfWeek.map((day, index) => {
        if (day.id === 0) return null

        return (
          <TableHead
            key={index as Key}
            className={clsx(
              'text-center',
              dayNumber === day.id && 'bg-neutral-200 dark:bg-neutral-800'
            )}
          >
            {day.name}
          </TableHead>
        )
      })}
    </>
  )
}

export default DayOfWeekRow

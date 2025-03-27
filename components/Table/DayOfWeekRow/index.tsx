import React, { Key } from 'react'

import { TableHead } from '@/components/ui/table'

import dayOfWeek from '../common/day-of-the-week'

const DayOfWeekRow = dayOfWeek.map((day, index) => {
  if (day.id === 0) return

  return (
    <TableHead key={index as Key} className="text-center">
      {day.name}
    </TableHead>
  )
})

export default DayOfWeekRow

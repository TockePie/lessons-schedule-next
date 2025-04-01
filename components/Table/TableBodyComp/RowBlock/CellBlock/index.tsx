import React, { ReactNode } from 'react'
import { TableCell } from '@ui/table'

import Card from '@/components/Card'
import dayOfWeek from '@/components/Table/common/day-of-the-week'
import { ScheduleProps } from '@/types/schedule'

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

    const item = Array.isArray(scheduleData)
      ? scheduleData.find((e) => e.row === time.row && e.day === day.id)
      : null

    return (
      <TableCell key={`day-${day.id}`} className="text-center">
        {item ? (
          <Card
            title={item.title}
            type={item.type}
            teacher={item.teacher}
            url={item.url}
          />
        ) : null}
      </TableCell>
    )
  })
}

export default CellBlock

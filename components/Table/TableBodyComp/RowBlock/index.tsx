import React, { ReactNode } from 'react'

import lessonNumber from '@/components/Table/common/lesson-number'
import { TableCell, TableRow } from '@/components/ui/table'
import { ScheduleProps } from '@/types/schedule'

import CellBlock from './CellBlock'

const RowBlock = (scheduleData: ScheduleProps[] | undefined): ReactNode => {
  return lessonNumber.map((time, index) => {
    const hasRow =
      Array.isArray(scheduleData) &&
      scheduleData.some((e) => e.row === time.row)
    if (!hasRow) return

    return (
      <TableRow key={index}>
        <TableCell className="text-center">{time.name}</TableCell>
        {CellBlock(time, scheduleData)}
      </TableRow>
    )
  })
}

export default RowBlock

import React, { ReactNode } from 'react'

import lessonNumber from '@/common/constants/lesson-number'
import { TableCell, TableRow } from '@/components/ui/table'
import { ScheduleProps } from '@/types/schedule'
import convertTime from '@/utils/convert-time'

import CellBlock from './CellBlock'

const RowBlock = (scheduleData: ScheduleProps[] | undefined): ReactNode => {
  return lessonNumber.map((time, index) => {
    const hasRow =
      Array.isArray(scheduleData) &&
      scheduleData.some((e) => e.row === time.row)
    if (!hasRow) return

    const timeRow = convertTime(time.beginTime)

    return (
      <TableRow key={index}>
        <TableCell className="text-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <p>{time.name}</p>
            <p className="font-bold">{timeRow}</p>
          </div>
        </TableCell>
        {CellBlock(time, scheduleData)}
      </TableRow>
    )
  })
}

export default RowBlock

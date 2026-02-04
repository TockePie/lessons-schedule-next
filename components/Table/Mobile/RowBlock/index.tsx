import React, { ReactNode, useContext } from 'react'

import { LESSON_NUMBER } from '@/common/constants/lesson-number'
import { TableCell, TableRow } from '@/components/ui/table'
import { ScheduleEntityType } from '@/types/entities/schedule'
import convertTime from '@/utils/convert-time'

import { DayContext } from '../day-tabs'

import CellBlock from './CellBlock'

const RowBlock = (
  scheduleData: ScheduleEntityType[] | undefined
): ReactNode => {
  const manualDay = useContext(DayContext)

  const allRows =
    scheduleData
      ?.filter((item) => item.day === manualDay)
      .map((item) => item.row) ?? []
  const maxRowNumber = Math.max(...allRows)

  return LESSON_NUMBER.map((time, index) => {
    if (time.row > maxRowNumber && time.row !== 1) return null

    const timeRow = convertTime(time.beginTime)

    return (
      <TableRow key={index}>
        <TableCell className="text-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <p>{time.name}</p>
            <p className="font-bold">{timeRow}</p>
          </div>
        </TableCell>
        <CellBlock time={time} scheduleData={scheduleData ?? []} />
      </TableRow>
    )
  })
}

export default RowBlock

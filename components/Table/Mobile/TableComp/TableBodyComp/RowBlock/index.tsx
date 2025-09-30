import React, { ReactNode, useContext } from 'react'

import lessonNumber from '@/common/constants/lesson-number'
import { TableCell, TableRow } from '@/components/ui/table'
import { ScheduleProps } from '@/types/schedule'
import convertTime from '@/utils/convert-time'

import { DayContext } from '../../..'

import CellBlock from './CellBlock'

const RowBlock = (scheduleData: ScheduleProps[] | undefined): ReactNode => {
  const manualDay = useContext(DayContext)

  const allRows =
    scheduleData
      ?.filter((item) => item.day === manualDay)
      .map((item) => item.row) ?? []
  const maxRowNumber = Math.max(...allRows)

  return lessonNumber.map((time, index) => {
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

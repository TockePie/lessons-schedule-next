'use client'

import { useContext } from 'react'

import { LESSON_NUMBER } from '@/common/constants/lesson-number'
import { TableCell, TableRow } from '@/components/ui/table'
import { ScheduleEntityType } from '@/types/entities/schedule'
import convertTime from '@/utils/convert-time'

import CellBlock from '../cell-block'

import { DayContext } from './day-tabs'

export default function RowBlock({
  scheduleData
}: {
  scheduleData: ScheduleEntityType[] | undefined
}) {
  const manualDay = useContext(DayContext)
  const dayFilter = scheduleData?.filter((item) => item.day === manualDay)

  const allRows = dayFilter?.map((item) => item.row) ?? []
  const maxRowNumber = Math.max(...allRows)

  return LESSON_NUMBER.filter((time) => time.row <= maxRowNumber).map(
    (time) => (
      <TableRow key={time.row}>
        <TableCell className="min-w-54 text-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <p>{time.name}</p>
            <p className="font-bold">{convertTime(time.beginTime)}</p>
          </div>
        </TableCell>

        <CellBlock
          time={time}
          scheduleData={scheduleData ?? []}
          manualDay={manualDay}
        />
      </TableRow>
    )
  )
}

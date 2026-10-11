'use client'

import { useContext } from 'react'
import { TableCell, TableRow } from '@ui/table'

import { ProcessedSchedule } from '@/features/schedule'

import { LESSON_SLOTS } from '../../constants/lesson-number'
import convertTime from '../../lib/format-minutes-to-standart-time'
import CellBlock from '../cell-block'
import { SelectedDayContext } from './day-tabs'

export default function ScheduleRows({
  schedule
}: {
  schedule: ProcessedSchedule
}) {
  const selectedDay = useContext(SelectedDayContext)

  return LESSON_SLOTS.filter((slot) => slot.row <= schedule.lastRow).map(
    (slot) => (
      <TableRow key={slot.row}>
        <TableCell className="min-w-54 text-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <p>{slot.name}</p>
            <p className="font-bold">{convertTime(slot.beginTime)}</p>
          </div>
        </TableCell>

        <CellBlock
          time={slot}
          scheduleData={schedule}
          selectedDay={selectedDay}
        />
      </TableRow>
    )
  )
}

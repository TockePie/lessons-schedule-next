import { TableCell, TableRow } from '@ui/table'

import { ProcessedSchedule } from '@/features/schedule'

import { LESSON_SLOTS } from '../../constants/lesson-number'
import formatMinutesToStandartTime from '../../lib/format-minutes-to-standart-time'
import CellBlock from '../cell-block'

export default function ScheduleRows({
  schedule
}: {
  schedule: ProcessedSchedule
}) {
  return LESSON_SLOTS.filter((slot) => slot.row <= schedule.lastRow).map(
    (slot) => (
      <TableRow key={slot.row}>
        <TableCell className="text-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <p>{slot.name}</p>
            <p className="font-bold">
              {formatMinutesToStandartTime(slot.beginTime)}
            </p>
          </div>
        </TableCell>

        <CellBlock time={slot} scheduleData={schedule} />
      </TableRow>
    )
  )
}

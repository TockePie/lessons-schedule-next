import { TableCell, TableRow } from '@ui/table'

import { LESSON_NUMBER } from '@/common/constants/lesson-number'
import { ScheduleEntityType } from '@/types/entities/schedule'
import convertTime from '@/utils/convert-time'

import CellBlock from './CellBlock'

export default function RowBlock({
  scheduleData
}: {
  scheduleData: ScheduleEntityType[] | undefined
}) {
  const allRows = scheduleData?.map((item) => item.row) ?? []
  const maxRowNumber = Math.max(...allRows)

  return LESSON_NUMBER.filter((time) => time.row <= maxRowNumber).map(
    (time) => (
      <TableRow key={time.row}>
        <TableCell className="text-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <p>{time.name}</p>
            <p className="font-bold">{convertTime(time.beginTime)}</p>
          </div>
        </TableCell>

        <CellBlock time={time} scheduleData={scheduleData ?? []} />
      </TableRow>
    )
  )
}

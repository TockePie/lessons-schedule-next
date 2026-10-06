import { TableCell, TableRow } from '@ui/table'

import { Schedule } from '@/features/schedule'

import { LESSON_NUMBER } from '../../constants/lesson-number'
import convertTime from '../../lib/convert-time'
import CellBlock from '../cell-block'

export default function RowBlock({ scheduleData }: { scheduleData: Schedule }) {
  const allRows = scheduleData.map((item) => item.row)
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

        <CellBlock time={time} scheduleData={scheduleData} manualDay={null} />
      </TableRow>
    )
  )
}

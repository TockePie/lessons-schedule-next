import { Table, TableBody, TableHead, TableHeader, TableRow } from '@ui/table'

import { ScheduleEntityType } from '@/types/entities/schedule'

import DayOfWeekRow from './DayOfWeekRow'
import EmptyState from './empty-state'
import RowBlock from './RowBlock'

interface Props {
  scheduleData: ScheduleEntityType[] | undefined
  isGroup: string
}

export default function TableDesktop({ scheduleData, isGroup }: Props) {
  return (
    <Table className="mx-auto w-[100%] max-w-360 table-fixed border border-neutral-200 max-lg:hidden dark:border-neutral-800">
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/12 text-center">Пара</TableHead>
          <DayOfWeekRow />
        </TableRow>
      </TableHeader>

      {!isGroup ? (
        <EmptyState message="Оберіть групу, щоб побачити розклад" />
      ) : !scheduleData || scheduleData.length === 0 ? (
        <EmptyState message="Розклад відсутній для цієї групи" />
      ) : (
        <TableBody>
          <RowBlock scheduleData={scheduleData} />
        </TableBody>
      )}
    </Table>
  )
}

'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@ui/table'
import { usePathname } from 'next/navigation'

import { ScheduleEntityType } from '@/types/entities/schedule'

import RowBlock from './TableBodyComp/RowBlock'
import DayOfWeekRow from './DayOfWeekRow'

export default function TableDesktop({
  scheduleData
}: {
  scheduleData: ScheduleEntityType[] | undefined
}) {
  const pathname = usePathname()
  const groupId = pathname.split('/')[1]

  if (!groupId) {
    return (
      <Table className="mx-auto w-[100%] max-w-360 table-fixed border border-neutral-200 max-lg:hidden dark:border-neutral-800">
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/12 text-center">Пара</TableHead>
            <DayOfWeekRow />
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell
              colSpan={7}
              className="text-muted-foreground py-8 text-center text-xl font-bold"
            >
              <span>Оберіть групу, щоб побачити розклад</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )
  }

  return (
    <Table className="mx-auto w-[100%] max-w-360 table-fixed border border-neutral-200 max-lg:hidden dark:border-neutral-800">
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/12 text-center">Пара</TableHead>
          <DayOfWeekRow />
        </TableRow>
      </TableHeader>

      {!scheduleData || scheduleData.length === 0 ? (
        <TableBody>
          <TableRow>
            <TableCell
              colSpan={7}
              className="text-muted-foreground py-8 text-center text-xl font-bold"
            >
              <span>Розклад відсутній для цієї групи</span>
            </TableCell>
          </TableRow>
        </TableBody>
      ) : (
        <TableBody>
          <RowBlock scheduleData={scheduleData} />
        </TableBody>
      )}
    </Table>
  )
}

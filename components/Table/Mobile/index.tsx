'use client'

import { useContext } from 'react'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@ui/table'

import { DAY_OF_WEEK } from '@/common/constants/day-of-the-week'
import { ScheduleEntityType } from '@/types/entities/schedule'

import EmptyState from '../empty-state'

import { DayContext } from './day-tabs'
import RowBlock from './RowBlock'

interface Props {
  scheduleData: ScheduleEntityType[] | undefined
  isGroup: string
}

const TableMobile = ({ scheduleData, isGroup }: Props) => {
  const manualDay = useContext(DayContext)

  const dayName = manualDay === 7 ? 'Неділя' : DAY_OF_WEEK[manualDay!].name

  return (
    <Table className="mx-auto w-full max-w-96 table-fixed border border-neutral-200 dark:border-neutral-800">
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/3 text-center">Пара</TableHead>
          <TableHead className="text-center">{dayName}</TableHead>
        </TableRow>
      </TableHeader>

      {!isGroup ? (
        <EmptyState
          message="Оберіть групу, щоб побачити розклад"
          size="mobile"
        />
      ) : !scheduleData || scheduleData.length === 0 ? (
        <EmptyState message="Розклад відсутній для цієї групи" size="mobile" />
      ) : (
        <TableBody>{RowBlock(scheduleData)}</TableBody>
      )}
    </Table>
  )
}

export default TableMobile

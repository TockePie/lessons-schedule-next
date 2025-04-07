import React from 'react'
import { Table, TableHead, TableHeader, TableRow } from '@ui/table'

import dayOfWeek from '@/common/constants/day-of-the-week'
import useCurrentDay from '@/common/context/current-day'

import TableBodyComp from './TableBodyComp'

const TableComp = () => {
  const { currentDay } = useCurrentDay()

  return (
    <Table className="mx-auto w-[100%] table-fixed border border-neutral-200 dark:border-neutral-800">
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/3 text-center">Пара</TableHead>
          <TableHead className="text-center">
            {dayOfWeek[currentDay].name}
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBodyComp />
    </Table>
  )
}

export default TableComp

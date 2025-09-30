import React, { useContext } from 'react'
import { Table, TableHead, TableHeader, TableRow } from '@ui/table'

import dayOfWeek from '@/common/constants/day-of-the-week'

import { DayContext } from '..'

import TableBodyComp from './TableBodyComp'

const TableComp = () => {
  const manualDay = useContext(DayContext)

  const dayName = manualDay === 7 ? 'Неділя' : dayOfWeek[manualDay!].name

  return (
    <Table className="mx-auto w-full max-w-96 table-fixed border border-neutral-200 dark:border-neutral-800">
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/3 text-center">Пара</TableHead>
          <TableHead className="text-center">{dayName}</TableHead>
        </TableRow>
      </TableHeader>

      <TableBodyComp />
    </Table>
  )
}

export default TableComp

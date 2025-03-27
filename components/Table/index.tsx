import React from 'react'
import { Table, TableHead, TableHeader, TableRow } from '@ui/table'

import DayOfWeekRow from './DayOfWeekRow'
import TableBodyComp from './TableBodyComp'

const TableDesktop = () => {
  return (
    <Table className="mx-auto w-11/12 max-w-360 table-fixed">
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/12 text-center">Пара</TableHead>
          {DayOfWeekRow}
        </TableRow>
      </TableHeader>

      <TableBodyComp />
    </Table>
  )
}

export default TableDesktop

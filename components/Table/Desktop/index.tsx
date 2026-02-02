import { Table, TableHead, TableHeader, TableRow } from '@ui/table'

import DayOfWeekRow from './DayOfWeekRow'
import TableBodyComp from './TableBodyComp'

export default function TableDesktop() {
  return (
    <Table className="mx-auto w-[100%] max-w-360 table-fixed border border-neutral-200 max-lg:hidden dark:border-neutral-800">
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/12 text-center">Пара</TableHead>
          <DayOfWeekRow />
        </TableRow>
      </TableHeader>

      <TableBodyComp />
    </Table>
  )
}

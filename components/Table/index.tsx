import { PropsWithChildren } from 'react'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@ui/table'
import clsx from 'clsx'

import DayOfWeekRow from './Desktop/DayOfWeekRow'
import DayTableHead from './Mobile/day-table-head'
import EmptyState from './empty-state'

interface Props extends PropsWithChildren {
  scheduleDataLenght: number
  isGroup: string
  device: 'desktop' | 'mobile'
}

export default function LessonsTable({
  scheduleDataLenght,
  isGroup,
  device,
  children
}: Props) {
  return (
    <Table
      className={clsx(
        'mx-auto w-full table-fixed border border-neutral-200 dark:border-neutral-800',
        device === 'mobile'
          ? 'max-w-96'
          : device === 'desktop'
            ? 'max-w-360 max-lg:hidden'
            : ''
      )}
    >
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/12 text-center">Пара</TableHead>

          {device === 'mobile' ? (
            <DayTableHead />
          ) : device === 'desktop' ? (
            <DayOfWeekRow />
          ) : (
            ''
          )}
        </TableRow>
      </TableHeader>

      {!isGroup ? (
        <EmptyState
          message="Оберіть групу, щоб побачити розклад"
          size={device}
        />
      ) : scheduleDataLenght === 0 ? (
        <EmptyState message="Розклад відсутній для цієї групи" size={device} />
      ) : (
        <TableBody>{children}</TableBody>
      )}
    </Table>
  )
}

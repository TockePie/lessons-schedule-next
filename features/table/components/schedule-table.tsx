import { PropsWithChildren } from 'react'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@ui/table'
import { cx } from 'class-variance-authority'

import EmptyState from './empty-state'

interface Props extends PropsWithChildren {
  scheduleDataLength: number
  groupId?: string
  device: 'desktop' | 'mobile'
  header: React.ReactNode
}

export default function ScheduleTable({
  scheduleDataLength,
  groupId,
  device,
  header,
  children
}: Props) {
  const emptyMessage = !groupId
    ? 'Оберіть групу, щоб побачити розклад'
    : scheduleDataLength === 0
      ? 'Розклад відсутній для цієї групи'
      : null

  return (
    <Table
      className={cx(
        'mx-auto w-full table-fixed border border-neutral-200 dark:border-neutral-800',
        device === 'mobile' ? 'max-w-96' : 'max-w-360 max-lg:hidden'
      )}
    >
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/3 text-center lg:w-1/12">Пара</TableHead>

          {header}
        </TableRow>
      </TableHeader>

      {emptyMessage ? (
        <EmptyState message={emptyMessage} size={device} />
      ) : (
        <TableBody>{children}</TableBody>
      )}
    </Table>
  )
}

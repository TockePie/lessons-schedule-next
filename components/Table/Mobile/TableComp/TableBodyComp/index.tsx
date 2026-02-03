import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { TableBody, TableCell, TableRow } from '@ui/table'
import { usePathname } from 'next/navigation'

import useWeekParity from '@/common/context/week-parity'
import { getGroupSchedule } from '@/lib/api'

import RowBlock from './RowBlock'

const TableBodyCompMobile = () => {
  const { weekParity } = useWeekParity()
  const pathname = usePathname()

  const groupId = pathname.split('/')[1] as string

  const {
    data: scheduleData,
    isError,
    isLoading,
    error
  } = useQuery({
    queryKey: ['group-schedule', pathname, weekParity],
    queryFn: () => getGroupSchedule(groupId, weekParity),
    enabled: !!groupId,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: 1000 * 60 * 60 * 24 // 1 day
  })

  if (!groupId) {
    return (
      <TableBody>
        <TableRow>
          <TableCell
            colSpan={2}
            className="text-muted-foreground py-8 text-center text-xl font-bold"
          >
            <span className="text-wrap">
              Оберіть групу, щоб побачити розклад
            </span>
          </TableCell>
        </TableRow>
      </TableBody>
    )
  }

  if (isLoading) {
    return (
      <TableBody>
        <TableRow>
          <TableCell colSpan={2} className="py-8 text-center">
            <div className="flex justify-center">
              <div className="border-primary h-6 w-6 animate-spin rounded-full border-2 border-t-transparent"></div>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    )
  }

  if (isError) {
    throw new Error(error.message)
  }

  if (!scheduleData || scheduleData.length === 0) {
    return (
      <TableBody>
        <TableRow>
          <TableCell
            colSpan={2}
            className="text-muted-foreground py-8 text-center text-xl font-bold"
          >
            <span className="text-wrap">Розклад відсутній для цієї групи</span>
          </TableCell>
        </TableRow>
      </TableBody>
    )
  }

  return <TableBody>{RowBlock(scheduleData)}</TableBody>
}

export default TableBodyCompMobile

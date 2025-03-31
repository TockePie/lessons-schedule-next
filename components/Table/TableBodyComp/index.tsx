import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'

import useWeekParity from '@/common/context/week-parity'
import { TableBody, TableCell, TableRow } from '@/components/ui/table'
import { getGroupSchedule } from '@/lib/api'

import lessonNumber from '../common/lesson-number'

const TableBodyComp = () => {
  const { weekParity } = useWeekParity()
  const pathname = usePathname()

  const groupId = pathname.split('/')[1] as string

  const {
    data: scheduleData,
    isError,
    error
  } = useQuery({
    queryKey: ['group-schedule', pathname, weekParity],
    queryFn: () => getGroupSchedule(groupId, weekParity),
    enabled: !!groupId,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: 1000 * 60 * 60 * 24 // 1 day
  })

  if (isError) {
    throw new Error(error.message)
  }

  const RowBlock = lessonNumber.map((time, index) => {
    const hasRow =
      Array.isArray(scheduleData) &&
      scheduleData.some((e) => e.row === time.row)
    if (!hasRow) return

    return (
      <TableRow key={index}>
        <TableCell className="text-center">{time.name}</TableCell>
      </TableRow>
    )
  })

  return <TableBody>{RowBlock}</TableBody>
}

export default TableBodyComp

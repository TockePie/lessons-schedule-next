import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { TableBody } from '@ui/table'
import { usePathname } from 'next/navigation'

import useWeekParity from '@/common/context/week-parity'
import { getGroupSchedule } from '@/lib/api'

import RowBlock from './RowBlock'

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

  //TODO: make message if scheduleData is empty
  return <TableBody>{RowBlock(scheduleData)}</TableBody>
}

export default TableBodyComp

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import useWeekParity from '@/common/context/week-parity'
import { TableBody, TableCell, TableRow } from '@/components/ui/table'
import { getGroupSchedule } from '@/lib/api'
import { InternalServerErrorProps } from '@/types/internal-error'
import { ScheduleProps } from '@/types/schedule'

import lessonNumber from '../common/lesson-number'

const TableBodyComp = () => {
  const [scheduleData, setScheduleData] = useState<
    ScheduleProps[] | InternalServerErrorProps
  >()
  const { weekParity } = useWeekParity()
  const pathname = usePathname()

  useEffect(() => {
    void (async () => {
      const groupId = pathname.split('/')[1] as string
      const data = await getGroupSchedule(groupId, weekParity)
      setScheduleData(data)
    })()
  }, [pathname, weekParity])

  if (scheduleData && 'error' in scheduleData)
    throw new Error(scheduleData.error.message)

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

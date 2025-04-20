import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/tabs'

import dayOfWeek from '@/common/constants/day-of-the-week'
import useCurrentDay from '@/common/context/current-day'
import { CurrentDayContextValue } from '@/types/days'

import TableComp from './TableComp'

const TableMobile = () => {
  const { currentDay, setCurrentDay } = useCurrentDay()

  const DayButtons = [...Array(7).keys()].map((day) => {
    if (day === 0) return null
    return (
      <TabsTrigger key={day} value={day.toString()}>
        {dayOfWeek[day].shortUa.toUpperCase()}
      </TabsTrigger>
    )
  })

  return (
    <Tabs
      defaultValue={currentDay.toString()}
      onValueChange={(value) =>
        setCurrentDay(Number(value) as CurrentDayContextValue['currentDay'])
      }
      className="flex flex-col items-center gap-5 select-none lg:hidden"
    >
      <TabsList className="grid w-83 grid-cols-6 border border-neutral-200 dark:border-neutral-900 dark:bg-neutral-950">
        {DayButtons}
      </TabsList>

      <TabsContent value={currentDay.toString()} className="w-full">
        <TableComp />
      </TabsContent>
    </Tabs>
  )
}

export default TableMobile

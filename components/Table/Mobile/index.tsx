import React, { createContext, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/tabs'

import dayOfWeek from '@/common/constants/day-of-the-week'
import useCurrent from '@/common/context/current-date'
import { CurrentDateContextValue, CurrentDay } from '@/types/current-date'

import TableComp from './TableComp'

const DayContext = createContext<CurrentDay | null>(null)

const TableMobile = () => {
  const { currentDay } = useCurrent()
  const [manualDay, setManualDay] = useState(currentDay)

  const DayButtons = [...Array(7).keys()].map((day) => {
    if (day === 0) return null
    return (
      <TabsTrigger key={day} value={day.toString()}>
        {dayOfWeek[day].shortUa.toUpperCase()}
      </TabsTrigger>
    )
  })

  return (
    <DayContext value={manualDay}>
      <Tabs
        defaultValue={manualDay.toString()}
        onValueChange={(value) =>
          setManualDay(Number(value) as CurrentDateContextValue['currentDay'])
        }
        className="flex flex-col items-center gap-5 select-none lg:hidden"
      >
        <TabsList className="grid w-83 grid-cols-6 border border-neutral-200 dark:border-neutral-900 dark:bg-neutral-950">
          {DayButtons}
        </TabsList>

        <TabsContent value={manualDay.toString()} className="w-full">
          <TableComp />
        </TabsContent>
      </Tabs>
    </DayContext>
  )
}

export { DayContext }
export default TableMobile

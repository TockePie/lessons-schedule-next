'use client'

import React, { createContext, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/tabs'

import {
  DayOfWeek,
  getCurrentDayOfWeek,
  useCurrentDateContext
} from '@/features/time'

import { DAY_OF_WEEK } from '../../constants/day-of-the-week'

const DayContext = createContext<DayOfWeek | null>(null)

const DayTabs = ({ children }: { children: React.ReactNode }) => {
  const currentDate = useCurrentDateContext()
  const currentDayOfWeek = getCurrentDayOfWeek(currentDate)

  const [manualDay, setManualDay] = useState(currentDayOfWeek)

  const DayButtons = [...Array(7).keys()].map((day) => {
    if (day === 0) return null

    return (
      <TabsTrigger key={day} value={day.toString()}>
        {DAY_OF_WEEK[day].shortUa.toUpperCase()}
      </TabsTrigger>
    )
  })

  return (
    <DayContext value={manualDay}>
      <Tabs
        defaultValue={manualDay.toString()}
        onValueChange={(value) => setManualDay(Number(value) as DayOfWeek)}
        className="flex flex-col items-center gap-5 select-none lg:hidden"
      >
        <TabsList className="grid w-83 grid-cols-6 border border-neutral-200 dark:border-neutral-900 dark:bg-neutral-950">
          {DayButtons}
        </TabsList>

        <TabsContent value={manualDay.toString()} className="w-full">
          {children}
        </TabsContent>
      </Tabs>
    </DayContext>
  )
}

export { DayContext }
export default DayTabs

'use client'

import React, { createContext, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/tabs'

import {
  DayOfWeek,
  getCurrentDayOfWeek,
  useCurrentDateContext
} from '@/features/time'

import { STUDY_DAYS } from '../../constants/days-of-week'

export const SelectedDayContext = createContext<DayOfWeek | undefined>(
  undefined
)

export default function DayTabs({ children }: { children: React.ReactNode }) {
  const currentDate = useCurrentDateContext()
  const currentDayOfWeek = getCurrentDayOfWeek(currentDate)

  const [selectedDay, setSelectedDay] = useState(currentDayOfWeek)

  const dayTabs = STUDY_DAYS.map((day) => (
    <TabsTrigger key={day.id} value={day.id.toString()}>
      {day.shortUk.toUpperCase()}
    </TabsTrigger>
  ))

  return (
    <SelectedDayContext value={selectedDay}>
      <Tabs
        defaultValue={selectedDay.toString()}
        onValueChange={(value) => setSelectedDay(Number(value) as DayOfWeek)}
        className="flex flex-col items-center gap-5 select-none lg:hidden"
      >
        <TabsList className="grid w-83 grid-cols-6 border border-neutral-200 dark:border-neutral-900 dark:bg-neutral-950">
          {dayTabs}
        </TabsList>

        <TabsContent value={selectedDay.toString()} className="w-full">
          {children}
        </TabsContent>
      </Tabs>
    </SelectedDayContext>
  )
}

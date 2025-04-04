import React from 'react'
import { Tabs, TabsList, TabsTrigger } from '@ui/tabs'

import dayOfWeek from '@/common/constants/day-of-the-week'
import useCurrentDay from '@/common/context/current-day'
import { CurrentDayContextValue } from '@/types/days'

const TableMobile = () => {
  const { currentDay, setCurrentDay } = useCurrentDay()
  return (
    <Tabs
      defaultValue={currentDay.toString()}
      onValueChange={(value) =>
        setCurrentDay(Number(value) as CurrentDayContextValue['currentDay'])
      }
      className="flex flex-col items-center gap-5 select-none"
    >
      <TabsList className="grid w-full grid-cols-6 border border-neutral-200 dark:border-neutral-900 dark:bg-neutral-950">
        {[...Array(7).keys()].map((day) => {
          if (day === 0) return null
          return (
            <TabsTrigger key={day} value={day.toString()}>
              {dayOfWeek[day].shortUa.toUpperCase()}
            </TabsTrigger>
          )
        })}
      </TabsList>
    </Tabs>
  )
}

export default TableMobile

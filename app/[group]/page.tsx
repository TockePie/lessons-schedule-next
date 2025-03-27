'use client'

import React, { lazy } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/tabs'

import useWeekParity from '@/common/context/week-parity'
import { WeekParity } from '@/types/week-parity'

const TableDesktop = lazy(() => import('@/components/Table'))

const Page = () => {
  const { weekParity, setWeekParity } = useWeekParity()

  return (
    <main className="h-fit bg-neutral-50 p-5 dark:bg-black">
      <Tabs
        defaultValue={weekParity}
        onValueChange={(value) => setWeekParity(value as WeekParity)}
        className="flex flex-col items-center gap-5"
      >
        <TabsList className="grid grid-cols-2 border border-neutral-200">
          <TabsTrigger value="even">Парний тиждень</TabsTrigger>
          <TabsTrigger value="odd">Непарний тиждень</TabsTrigger>
        </TabsList>

        <TabsContent value={weekParity} className="w-full">
          <TableDesktop />
        </TabsContent>
      </Tabs>
    </main>
  )
}

export default Page

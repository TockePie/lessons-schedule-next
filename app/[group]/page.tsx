'use client'

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/tabs'

import useWeekParity from '@/common/context/week-parity'
import Table from '@/components/Table'
import { WeekParity } from '@/types/week-parity'

const Page = () => {
  const { weekParity, setWeekParity } = useWeekParity()

  return (
    <main className="h-fit bg-neutral-50 p-5 dark:bg-black">
      <Tabs
        defaultValue={weekParity}
        onValueChange={(value) => setWeekParity(value as WeekParity)}
        className="flex flex-col items-center gap-2"
      >
        <TabsList className="grid grid-cols-2 border border-neutral-200">
          <TabsTrigger value="even">Парний тиждень</TabsTrigger>
          <TabsTrigger value="odd">Непарний тиждень</TabsTrigger>
        </TabsList>
        <TabsContent value={weekParity}>
          <Table />
        </TabsContent>
      </Tabs>
    </main>
  )
}

export default Page

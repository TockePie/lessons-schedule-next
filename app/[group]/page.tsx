'use client'

import React, { lazy } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/tabs'

import useWeekParity from '@/common/context/week-parity'
import useWindowDimensions from '@/hooks/use-window-dimentions'
import { WeekParity } from '@/types/week-parity'

const TableDesktop = lazy(() => import('@/components/Table/Desktop'))
const TableMobile = lazy(() => import('@/components/Table/Mobile'))

const Page = () => {
  const { weekParity, setWeekParity } = useWeekParity()
  const { width } = useWindowDimensions()
  const isDesktop = width > 1279
  const isMobile = width < 640

  return (
    <main className="h-full bg-neutral-50 p-5 dark:bg-black">
      <Tabs
        defaultValue={weekParity}
        onValueChange={(value) => setWeekParity(value as WeekParity)}
        className="flex flex-col items-center gap-5 select-none"
      >
        <TabsList className="grid grid-cols-2 border border-neutral-200 dark:border-neutral-900 dark:bg-neutral-950">
          <TabsTrigger value="even">Парний тиждень</TabsTrigger>
          <TabsTrigger value="odd">Непарний тиждень</TabsTrigger>
        </TabsList>

        <TabsContent value={weekParity} className="w-full">
          {isDesktop && <TableDesktop />}
          {isMobile && <TableMobile />}
        </TabsContent>
      </Tabs>
    </main>
  )
}

export default Page

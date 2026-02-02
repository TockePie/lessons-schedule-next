'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/tabs'

import useWeekParity from '@/common/context/week-parity'
import TableDesktop from '@/components/Table/Desktop'
import TableMobile from '@/components/Table/Mobile'
import { WeekParity } from '@/types/week-parity'

const Page = () => {
  const { weekParity, setWeekParity } = useWeekParity()

  const handleChange = (value: string) => setWeekParity(value as WeekParity)

  return (
    <main className="h-full bg-neutral-50 p-5 dark:bg-black">
      <Tabs
        defaultValue={weekParity}
        onValueChange={handleChange}
        className="flex flex-col items-center gap-5 select-none"
      >
        <TabsList className="grid grid-cols-2 border border-neutral-200 dark:border-neutral-900 dark:bg-neutral-950">
          <TabsTrigger value="even">Парний тиждень</TabsTrigger>
          <TabsTrigger value="odd">Непарний тиждень</TabsTrigger>
        </TabsList>

        <TabsContent value={weekParity} className="w-full">
          <TableDesktop />
          <TableMobile />
        </TabsContent>
      </Tabs>
    </main>
  )
}

export default Page

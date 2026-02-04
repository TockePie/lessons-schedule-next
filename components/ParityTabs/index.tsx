'use client'

import { useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/tabs'
import { useRouter } from 'next/navigation'

interface Props {
  weekParity: 'even' | 'odd'
  evenChild: React.ReactNode
  oddChild: React.ReactNode
}

export default function ParityTabs({ weekParity, evenChild, oddChild }: Props) {
  const router = useRouter()

  useEffect(() => {
    router.push(`?parity=${weekParity}`)
  }, [])

  const handleChange = (value: string) => {
    router.push(`?parity=${value}`)
    router.refresh()
  }

  return (
    <Tabs
      onValueChange={handleChange}
      defaultValue={weekParity}
      className="flex flex-col items-center gap-5 pb-5 select-none"
    >
      <TabsList className="grid grid-cols-2 border border-neutral-200 dark:border-neutral-900 dark:bg-neutral-950">
        <TabsTrigger value="even">Парний тиждень</TabsTrigger>
        <TabsTrigger value="odd">Непарний тиждень</TabsTrigger>
      </TabsList>

      <TabsContent value="even" className="w-full">
        {evenChild}
      </TabsContent>
      <TabsContent value="odd" className="w-full">
        {oddChild}
      </TabsContent>
    </Tabs>
  )
}

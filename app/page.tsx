import React from 'react'
import { Button } from '@ui/button'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import GroupList from '@/components/global/GroupList'

const Home = async () => {
  const cookieStore = await cookies()
  const groupId = cookieStore.get('groupId')?.value

  if (groupId) {
    redirect(`/${groupId}`)
  }

  return (
    <main className="flex h-screen flex-col items-center justify-between gap-4 bg-neutral-50 py-10 md:justify-center md:gap-8 md:py-6 dark:bg-black">
      <div>
        <h1 className="text-center text-3xl font-bold">Оберіть групу</h1>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <GroupList variant="default" className="p-7" />
        <Button variant="outline" className="p-7">
          Допомога
        </Button>
      </div>
    </main>
  )
}

export default Home

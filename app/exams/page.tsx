import React from 'react'
import { Button } from '@ui/button'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import GroupList from '@/components/global/GroupList'

const ExamPage = async () => {
  const cookieStore = await cookies()
  const groupId = cookieStore.get('groupId')?.value

  if (groupId) {
    redirect(`/exams/${groupId}`)
  }

  return (
    <main className="h- flex flex-col items-center justify-between gap-4 bg-neutral-50 py-10 md:justify-center md:gap-8 md:py-6 dark:bg-black">
      <div>
        <h1 className="text-center text-3xl font-bold">Оберіть групу</h1>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <GroupList variant="default" className="p-7" />
        <Button variant="outline" className="p-7" asChild>
          <Link href="/help">Допомога</Link>
        </Button>
      </div>
    </main>
  )
}

export default ExamPage

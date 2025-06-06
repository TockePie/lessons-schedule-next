import React from 'react'
import { Button } from '@ui/button'
import Link from 'next/link'

import GroupList from '@/components/global/GroupList'

const ExamPage = () => {
  return (
    <main className="h-full bg-neutral-50 p-5 dark:bg-black">
      <h1 className="text-center text-3xl font-bold">Іспити для групи</h1>

      {/* <div className="grid grid-cols-2 gap-4">
        <GroupList variant="default" className="p-7" />
        <Button variant="outline" className="p-7" asChild>
          <Link href="/help">Допомога</Link>
        </Button>
      </div> */}
    </main>
  )
}

export default ExamPage

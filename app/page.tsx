import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import Navbar from '@/features/navbar'
import {
  DayOfWeekRow,
  DayTableHead,
  DayTabs,
  ScheduleTable
} from '@/features/table'

export default async function Home() {
  const cookieStore = await cookies()
  const groupId = cookieStore.get('groupId')?.value

  if (groupId) {
    redirect(`/${groupId}`)
  }

  return (
    <>
      <Navbar />
      <main className="h-full bg-neutral-50 p-5 dark:bg-black">
        <ScheduleTable
          scheduleDataLength={0}
          groupId=""
          device="desktop"
          header={<DayOfWeekRow />}
        />
        <DayTabs>
          <ScheduleTable
            scheduleDataLength={0}
            groupId=""
            device="mobile"
            header={<DayTableHead />}
          />
        </DayTabs>
      </main>
    </>
  )
}

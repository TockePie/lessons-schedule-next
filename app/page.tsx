import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import Navbar from '@/features/navbar'
import { DayTabs, ScheduleTable } from '@/features/table'

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
        <ScheduleTable scheduleDataLength={0} isGroup="" device="desktop" />
        <DayTabs>
          <ScheduleTable scheduleDataLength={0} isGroup="" device="mobile" />
        </DayTabs>
      </main>
    </>
  )
}

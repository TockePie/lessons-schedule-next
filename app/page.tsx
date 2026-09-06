import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import LessonsTable from '@/components/Table'
import DayTabs from '@/components/Table/Mobile/day-tabs'
import Navbar from '@/features/navbar'

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
        <LessonsTable scheduleDataLenght={0} isGroup="" device="desktop" />
        <DayTabs>
          <LessonsTable scheduleDataLenght={0} isGroup="" device="mobile" />
        </DayTabs>
      </main>
    </>
  )
}

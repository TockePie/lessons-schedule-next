import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import Navbar from '@/components/Navbar'
import LessonsTable from '@/components/Table'
import DayTabs from '@/components/Table/Mobile/day-tabs'

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
        <LessonsTable scheduleData={[]} isGroup="" device="desktop" />
        <DayTabs>
          <LessonsTable scheduleData={[]} isGroup="" device="mobile" />
        </DayTabs>
      </main>
    </>
  )
}

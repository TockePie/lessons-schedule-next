import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import Navbar from '@/components/Navbar'
import TableDesktop from '@/components/Table/Desktop'
import TableMobile from '@/components/Table/Mobile'
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
        <TableDesktop scheduleData={[]} isGroup="" />
        <DayTabs>
          <TableMobile scheduleData={[]} isGroup="" />
        </DayTabs>
      </main>
    </>
  )
}

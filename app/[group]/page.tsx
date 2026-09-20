import { cookies } from 'next/headers'

import { getGroupSchedule } from '@/api/endpoints/schedule'
import ParityTabs from '@/components/ParityTabs'
import LessonsTable from '@/components/Table'
import RowBlockDesktop from '@/components/Table/Desktop/row-block'
import DayTabs from '@/components/Table/Mobile/day-tabs'
import RowBlockMobile from '@/components/Table/Mobile/row-block'
import { getTime } from '@/lib/time'
import { parseCookie } from '@/utils/parse-cookie'

interface Props {
  params: Promise<{ group: string }>
}

export default async function Page({ params }: Props) {
  const [cookieStore, { group }] = await Promise.all([cookies(), params])

  const savedSelectives = parseCookie(
    cookieStore.get('selected_selectives')?.value
  )

  const scheduleData = await getGroupSchedule(group, undefined, savedSelectives)

  const scheduleEven: typeof scheduleData = []
  const scheduleOdd: typeof scheduleData = []

  for (const item of scheduleData) {
    if (item.week_parity === 'EVEN' || item.week_parity === 'BOTH') {
      scheduleEven.push(item)
    }
    if (item.week_parity === 'ODD' || item.week_parity === 'BOTH') {
      scheduleOdd.push(item)
    }
  }

  const time = getTime()

  return (
    <main className="h-full bg-neutral-50 p-5 dark:bg-black">
      <ParityTabs
        weekParity={time.weekParity}
        evenChild={
          <>
            <LessonsTable
              scheduleDataLength={scheduleEven.length}
              isGroup={group}
              device="desktop"
            >
              <RowBlockDesktop scheduleData={scheduleEven} />
            </LessonsTable>
            <DayTabs>
              <LessonsTable
                scheduleDataLength={scheduleEven.length}
                isGroup={group}
                device="mobile"
              >
                <RowBlockMobile scheduleData={scheduleEven} />
              </LessonsTable>
            </DayTabs>
          </>
        }
        oddChild={
          <>
            <LessonsTable
              scheduleDataLength={scheduleOdd.length}
              isGroup={group}
              device="desktop"
            >
              <RowBlockDesktop scheduleData={scheduleOdd} />
            </LessonsTable>
            <DayTabs>
              <LessonsTable
                scheduleDataLength={scheduleOdd.length}
                isGroup={group}
                device="mobile"
              >
                <RowBlockMobile scheduleData={scheduleOdd} />
              </LessonsTable>
            </DayTabs>
          </>
        }
      />
    </main>
  )
}

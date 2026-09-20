import { cookies } from 'next/headers'

import ParityTabs from '@/components/ParityTabs'
import LessonsTable from '@/components/Table'
import RowBlockDesktop from '@/components/Table/Desktop/row-block'
import DayTabs from '@/components/Table/Mobile/day-tabs'
import RowBlockMobile from '@/components/Table/Mobile/row-block'
import { divideSchedule, getGroupSchedule } from '@/features/schedule'
import { getServerTime } from '@/features/time'
import { parseCookie } from '@/utils/parse-cookie'

interface Props {
  params: Promise<{ group: string }>
}

export default async function Page({ params }: Props) {
  const [cookieStore, { group }] = await Promise.all([cookies(), params])

  const savedSelectives = parseCookie(
    cookieStore.get('selected_selectives')?.value
  )

  const { scheduleEven, scheduleOdd } = await getGroupSchedule(
    group,
    undefined,
    savedSelectives
  ).then((value) => divideSchedule(value))

  const time = getServerTime()

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

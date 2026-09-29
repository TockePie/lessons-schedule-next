import { cookies } from 'next/headers'

import { divideSchedule, getGroupSchedule } from '@/features/schedule'
import {
  DayTabs,
  ParityTabs,
  RowBlockDesktop,
  RowBlockMobile,
  ScheduleTable
} from '@/features/table'
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
  ).then(divideSchedule)

  const time = getServerTime()

  return (
    <main className="h-full bg-neutral-50 p-5 dark:bg-black">
      <ParityTabs
        weekParity={time.weekParity}
        evenChild={
          <>
            <ScheduleTable
              scheduleDataLength={scheduleEven.length}
              isGroup={group}
              device="desktop"
            >
              <RowBlockDesktop scheduleData={scheduleEven} />
            </ScheduleTable>
            <DayTabs>
              <ScheduleTable
                scheduleDataLength={scheduleEven.length}
                isGroup={group}
                device="mobile"
              >
                <RowBlockMobile scheduleData={scheduleEven} />
              </ScheduleTable>
            </DayTabs>
          </>
        }
        oddChild={
          <>
            <ScheduleTable
              scheduleDataLength={scheduleOdd.length}
              isGroup={group}
              device="desktop"
            >
              <RowBlockDesktop scheduleData={scheduleOdd} />
            </ScheduleTable>
            <DayTabs>
              <ScheduleTable
                scheduleDataLength={scheduleOdd.length}
                isGroup={group}
                device="mobile"
              >
                <RowBlockMobile scheduleData={scheduleOdd} />
              </ScheduleTable>
            </DayTabs>
          </>
        }
      />
    </main>
  )
}

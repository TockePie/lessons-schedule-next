import { cookies } from 'next/headers'

import { divideSchedule, getGroupSchedule } from '@/features/schedule'
import {
  DayOfWeekRow,
  DayTableHead,
  DayTabs,
  ParityTabs,
  RowBlockDesktop,
  RowBlockMobile,
  ScheduleTable
} from '@/features/table'
import { getWeekParity } from '@/features/time'
import { parseCookie } from '@/utils/parse-cookie'

interface Props {
  params: Promise<{ group: string }>
}

export default async function Page({ params }: Props) {
  const [cookieStore, { group }] = await Promise.all([cookies(), params])

  const savedSelectives = parseCookie(
    cookieStore.get('selected_selectives')?.value
  )

  const { scheduleEven, scheduleOdd } = await getGroupSchedule(group, {
    selectives: savedSelectives
  }).then(divideSchedule)

  const weekParity = getWeekParity()

  return (
    <main className="h-full bg-neutral-50 p-5 dark:bg-black">
      <ParityTabs
        weekParity={weekParity}
        evenChild={
          <>
            <ScheduleTable
              scheduleDataLength={scheduleEven.length}
              groupId={group}
              device="desktop"
              header={<DayOfWeekRow />}
            >
              <RowBlockDesktop scheduleData={scheduleEven} />
            </ScheduleTable>
            <DayTabs>
              <ScheduleTable
                scheduleDataLength={scheduleEven.length}
                groupId={group}
                device="mobile"
                header={<DayTableHead />}
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
              groupId={group}
              device="desktop"
              header={<DayOfWeekRow />}
            >
              <RowBlockDesktop scheduleData={scheduleOdd} />
            </ScheduleTable>
            <DayTabs>
              <ScheduleTable
                scheduleDataLength={scheduleOdd.length}
                groupId={group}
                device="mobile"
                header={<DayTableHead />}
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

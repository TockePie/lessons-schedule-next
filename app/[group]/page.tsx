import { cookies } from 'next/headers'

import {
  divideSchedule,
  getGroupSchedule,
  scheduleToMap
} from '@/features/schedule'
import {
  DaysHeaderCells,
  DayTableHead,
  DayTabs,
  ParityTabs,
  ScheduleRowsDesktop,
  ScheduleRowsMobile,
  ScheduleTable
} from '@/features/table'
import { getWeekParity } from '@/features/time'
import { parseStringArray } from '@/utils/parse-string-array'

interface Props {
  params: Promise<{ group: string }>
}

export default async function Page({ params }: Props) {
  const [cookieStore, { group }] = await Promise.all([cookies(), params])

  const pickedSelectives = parseStringArray(
    cookieStore.get('picked-selectives')?.value
  )

  const schedule = await getGroupSchedule(group, {
    selectives: pickedSelectives
  })
    .then(divideSchedule)
    .then(({ even, odd }) => ({
      even: scheduleToMap(even),
      odd: scheduleToMap(odd)
    }))

  const weekParity = getWeekParity()

  return (
    <main className="h-full bg-neutral-50 p-5 dark:bg-black">
      <ParityTabs
        weekParity={weekParity}
        evenChild={
          <>
            <ScheduleTable
              isScheduleEmpty={schedule.even.items.size === 0}
              groupId={group}
              device="desktop"
              header={<DaysHeaderCells />}
            >
              <ScheduleRowsDesktop schedule={schedule.even} />
            </ScheduleTable>
            <DayTabs>
              <ScheduleTable
                isScheduleEmpty={schedule.even.items.size === 0}
                groupId={group}
                device="mobile"
                header={<DayTableHead />}
              >
                <ScheduleRowsMobile schedule={schedule.even} />
              </ScheduleTable>
            </DayTabs>
          </>
        }
        oddChild={
          <>
            <ScheduleTable
              isScheduleEmpty={schedule.odd.items.size === 0}
              groupId={group}
              device="desktop"
              header={<DaysHeaderCells />}
            >
              <ScheduleRowsDesktop schedule={schedule.odd} />
            </ScheduleTable>
            <DayTabs>
              <ScheduleTable
                isScheduleEmpty={schedule.odd.items.size === 0}
                groupId={group}
                device="mobile"
                header={<DayTableHead />}
              >
                <ScheduleRowsMobile schedule={schedule.odd} />
              </ScheduleTable>
            </DayTabs>
          </>
        }
      />
    </main>
  )
}

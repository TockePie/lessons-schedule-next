import ParityTabs from '@/components/ParityTabs'
import TableDesktop from '@/components/Table/Desktop'
import TableMobile from '@/components/Table/Mobile'
import DayTabs from '@/components/Table/Mobile/day-tabs'
import { getGroupSchedule } from '@/lib/api'
import { getTime } from '@/lib/get-time'

interface Props {
  params: Promise<{ group: string }>
}

export default async function Page({ params }: Props) {
  const time = await getTime()

  const { group } = await params
  const scheduleData = await getGroupSchedule(group)

  const scheduleEven = scheduleData?.filter(
    (data) => data.week_parity === 'EVEN' || data.week_parity === 'BOTH'
  )

  const scheduleOdd = scheduleData?.filter(
    (data) => data.week_parity === 'ODD' || data.week_parity === 'BOTH'
  )

  return (
    <main className="h-full bg-neutral-50 p-5 dark:bg-black">
      <ParityTabs
        weekParity={time.weekParity}
        evenChild={
          <>
            <TableDesktop scheduleData={scheduleEven} isGroup={group} />
            <DayTabs>
              <TableMobile scheduleData={scheduleEven} isGroup={group} />
            </DayTabs>
          </>
        }
        oddChild={
          <>
            <TableDesktop scheduleData={scheduleOdd} isGroup={group} />
            <DayTabs>
              <TableMobile scheduleData={scheduleOdd} isGroup={group} />
            </DayTabs>
          </>
        }
      />
    </main>
  )
}

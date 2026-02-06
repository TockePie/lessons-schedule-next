import ParityTabs from '@/components/ParityTabs'
import LessonsTable from '@/components/Table'
import RowBlockDesktop from '@/components/Table/Desktop/RowBlock'
import DayTabs from '@/components/Table/Mobile/day-tabs'
import RowBlockMobile from '@/components/Table/Mobile/RowBlock'
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

  const scheduleDataLenght = {
    even: scheduleEven.length,
    odd: scheduleOdd.length
  }

  return (
    <main className="h-full bg-neutral-50 p-5 dark:bg-black">
      <ParityTabs
        weekParity={time.weekParity}
        evenChild={
          <>
            <LessonsTable
              scheduleDataLenght={scheduleDataLenght.even}
              isGroup={group}
              device="desktop"
            >
              <RowBlockDesktop scheduleData={scheduleEven} />
            </LessonsTable>
            <DayTabs>
              <LessonsTable
                scheduleDataLenght={scheduleDataLenght.even}
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
              scheduleDataLenght={scheduleDataLenght.odd}
              isGroup={group}
              device="desktop"
            >
              <RowBlockDesktop scheduleData={scheduleOdd} />
            </LessonsTable>
            <DayTabs>
              <LessonsTable
                scheduleDataLenght={scheduleDataLenght.odd}
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

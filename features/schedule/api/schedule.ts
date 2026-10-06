import { fetchAndValidate } from '@/api/fetch-and-validate'

import { scheduleSchema } from '../types/schedule'

type WeekType = 'even' | 'odd'

interface ScheduleOptions {
  week?: WeekType
  selectives?: string[]
}

export async function getGroupSchedule(
  id: string,
  { week, selectives }: ScheduleOptions = {}
) {
  return fetchAndValidate(`/schedule/${id}`, scheduleSchema, {
    cache: 'force-cache',
    searchParams: {
      ...(week && { week }),
      ...(selectives?.length && { selectives: selectives.join(',') })
    }
  })
}

import { fetchValidated } from '@/api/fetch-validated'

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
  return fetchValidated(`/schedule/${id}`, scheduleSchema, {
    cache: 'force-cache',
    searchParams: {
      ...(week && { week }),
      ...(selectives?.length && { selectives: selectives.join(',') })
    }
  })
}

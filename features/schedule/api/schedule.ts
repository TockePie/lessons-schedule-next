import { fetchValidated } from '@/api/fetch-validated'
import { WeekParity } from '@/features/time'

import { scheduleSchema } from '../types/schedule'

interface ScheduleOptions {
  week?: WeekParity
  selectives?: string[]
}

export async function getGroupSchedule(
  groupId: string,
  { week, selectives }: ScheduleOptions = {}
) {
  return fetchValidated(`/schedule/${groupId}`, scheduleSchema, {
    cache: 'force-cache',
    searchParams: {
      ...(week && { week }),
      ...(selectives?.length && { selectives: selectives.join(',') })
    }
  })
}

import { scheduleSchema } from '@/types/entities/schedule'

import { fetchAndValidate } from '../core/fetch-and-validate'

export async function getAllSelectives(id: string) {
  return await fetchAndValidate(`/schedule/${id}/selectives`, scheduleSchema)
}

export async function getGroupSchedule(
  id: string,
  week?: 'even' | 'odd',
  selectives: string[] = []
) {
  const params = new URLSearchParams()

  if (week) params.append('week', week)

  if (selectives.length > 0) {
    params.append('selectives', selectives.join(','))
  }

  const queryString = params.toString().replaceAll('%2C', ',')
  const url = queryString ? `?${queryString}` : ''

  return await fetchAndValidate(`/schedule/${id}${url}`, scheduleSchema, {
    cache: 'force-cache'
  })
}

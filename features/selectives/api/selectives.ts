import { fetchAndValidate } from '@/api/fetch-and-validate'
import { scheduleSchema } from '@/features/schedule/types/schedule'

export async function getAllSelectives(id: string) {
  return await fetchAndValidate(`/schedule/${id}/selectives`, scheduleSchema)
}

import { fetchAndValidate } from '@/api/core/fetch-and-validate'
import { scheduleSchema } from '@/types/entities/schedule'

export async function getAllSelectives(id: string) {
  return await fetchAndValidate(`/schedule/${id}/selectives`, scheduleSchema)
}

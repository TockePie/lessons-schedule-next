import { fetchValidated } from '@/api/fetch-validated'
import { scheduleSchema } from '@/features/schedule'

export async function getAllSelectives(id: string) {
  return await fetchValidated(`/schedule/${id}/selectives`, scheduleSchema)
}

import { fetchValidated } from '@/api/fetch-validated'
import { scheduleSchema } from '@/features/schedule'

export async function getGroupSelectives(groupId: string) {
  return fetchValidated(`/schedule/${groupId}/selectives`, scheduleSchema)
}

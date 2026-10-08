import { fetchText } from '@/api/fetch-text'
import { fetchValidated } from '@/api/fetch-validated'

import { groupListSchema } from '../types/group'

export async function getGroupsList() {
  return await fetchValidated('/group', groupListSchema)
}

export async function getGroupPicture(id: string) {
  return await fetchText(`/group/photo/${id}`)
}

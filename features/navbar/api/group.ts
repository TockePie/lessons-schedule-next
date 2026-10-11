import { fetchText } from '@/api/fetch-text'
import { fetchValidated } from '@/api/fetch-validated'

import { groupListSchema } from '../types/group'

export async function getGroupsList() {
  return fetchValidated('/group', groupListSchema)
}

export async function getGroupPicture(groupId: string) {
  return fetchText(`/group/photo/${groupId}`)
}

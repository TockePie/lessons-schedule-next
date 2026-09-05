import { groupListSchema } from '@/types/entities/group'

import { fetchAndValidate, fetchText } from '../core/fetch'

export async function getGroupsList() {
  return await fetchAndValidate('/group', groupListSchema)
}

export async function getGroupPicture(id: string) {
  return await fetchText(`/group/photo/${id}`)
}

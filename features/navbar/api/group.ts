import { fetchAndValidate } from '@/api/core/fetch-and-validate'
import { fetchText } from '@/api/core/fetch-text'

import { groupListSchema } from '../types/group'

export async function getGroupsList() {
  return await fetchAndValidate('/group', groupListSchema)
}

export async function getGroupPicture(id: string) {
  return await fetchText(`/group/photo/${id}`)
}

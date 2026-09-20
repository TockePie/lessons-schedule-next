import { fetchAndValidate } from '@/api/fetch-and-validate'
import { fetchText } from '@/api/fetch-text'

import { groupListSchema } from '../types/group'

export async function getGroupsList() {
  return await fetchAndValidate('/group', groupListSchema)
}

export async function getGroupPicture(id: string) {
  return await fetchText(`/group/photo/${id}`)
}

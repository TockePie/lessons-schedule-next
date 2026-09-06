import { groupListSchema } from '@/types/entities/group'

import { fetchAndValidate } from '../core/fetch-and-validate'
import { fetchText } from '../core/fetch-text'

export async function getGroupsList() {
  return await fetchAndValidate('/group', groupListSchema)
}

export async function getGroupPicture(id: string) {
  return await fetchText(`/group/photo/${id}`)
}

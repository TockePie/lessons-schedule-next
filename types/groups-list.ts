import z from 'zod'

import { GroupEntity } from './entities/group'

export const GroupsList = GroupEntity.pick({
  group_id: true,
  name: true
})

export type GroupsListType = z.infer<typeof GroupsList>

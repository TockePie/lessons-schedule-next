import { z } from 'zod'

export const GroupList = z.object({
  group_id: z.uuid(),
  name: z.string()
})

export type GroupListType = z.infer<typeof GroupList>

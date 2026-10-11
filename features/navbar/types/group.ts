import { z } from 'zod/mini'

export const groupSchema = z.object({
  group_id: z.uuid(),
  name: z.string()
})

export type GroupListItem = z.infer<typeof groupSchema>

export const groupListSchema = z.array(groupSchema)

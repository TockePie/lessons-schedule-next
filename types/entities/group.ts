import { z } from 'zod'

export const GroupEntity = z.object({
  group_id: z.uuid(),
  name: z.string(),
  photo: z.string()
})

export type GroupEntityType = z.infer<typeof GroupEntity>

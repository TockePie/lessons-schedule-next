import { z } from 'zod'

export const GroupEntity = z.object({
  group_id: z.uuid(),
  name: z.string(),
  photo: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
})

export type GroupEntityType = z.infer<typeof GroupEntity>

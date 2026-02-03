import z from 'zod'

import { SubjectEntity } from './subject'

export const WeekParityEnum = z.enum(['EVEN', 'ODD', 'BOTH'])
export type WeekParityType = z.infer<typeof WeekParityEnum>

export const ScheduleEntity = z.object({
  id: z.uuid(),
  day: z.number().min(1).max(6),
  row: z.number().min(1).max(7),
  week_parity: WeekParityEnum,
  subject: SubjectEntity
})

export type ScheduleEntityType = z.infer<typeof ScheduleEntity>

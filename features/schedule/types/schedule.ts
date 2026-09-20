import { z } from 'zod/mini'

import { subjectSchema } from './subject'

export const weekParityEnum = z.enum(['EVEN', 'ODD', 'BOTH'])
export type WeekParity = z.infer<typeof weekParityEnum>

export const scheduleItemSchema = z.object({
  id: z.uuid(),
  day: z.number().check(z.minimum(1), z.maximum(6)),
  row: z.number().check(z.minimum(1), z.maximum(7)),
  week_parity: weekParityEnum,
  externalId: z.uuid(),
  subject: subjectSchema
})

export const scheduleSchema = z.array(scheduleItemSchema)
export type Schedule = z.infer<typeof scheduleSchema>

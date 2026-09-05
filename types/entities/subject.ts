import { z } from 'zod/mini'

export const subjectTypeEnum = z.enum(['LECTURE', 'PRACTICE', 'LAB'])
export type SubjectType = z.infer<typeof subjectTypeEnum>

export const subjectSchema = z.object({
  subject_id: z.uuid(),
  title: z.string(),
  teacher: z.string(),
  url: z.nullable(z.url()),
  type: subjectTypeEnum,
  is_selective: z.boolean()
})
export type Subject = z.infer<typeof subjectSchema>

import z from 'zod'

export const SubjectTypeEnum = z.enum(['LECTURE', 'PRACTICE', 'LAB'])
export type SubjectType = z.infer<typeof SubjectTypeEnum>

export const SubjectEntity = z.object({
  subject_id: z.uuid(),
  title: z.string(),
  teacher: z.string(),
  url: z.url().nullable(),
  type: SubjectTypeEnum,
  is_selective: z.boolean()
})

export type SubjectEntityType = z.infer<typeof SubjectEntity>

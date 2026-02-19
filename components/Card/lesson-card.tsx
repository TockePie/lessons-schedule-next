import { SubjectEntityType, SubjectType } from '@/types/entities/subject'

import Card from '.'

const LESSON_COLORS: Record<SubjectType, string> = {
  LECTURE: 'border-indigo-400',
  PRACTICE: 'border-red-400',
  LAB: 'border-lime-400'
} as const

interface Props extends Omit<
  SubjectEntityType,
  'is_selective' | 'created_at' | 'updated_at' | 'subject_id'
> {
  actionFn: () => void
  isCurrent: boolean
}

export default function LessonCard(props: Props) {
  const { type, teacher } = props

  return (
    <Card {...props} className={LESSON_COLORS[type]}>
      <p className="text-neutral-600 dark:text-neutral-200">{teacher}</p>
    </Card>
  )
}

import { Subject } from '@/types/subject'
import Card from '.'

const LESSON_COLORS: Record<Subject['type'], string> = {
  LECTURE: 'border-indigo-400',
  PRACTICE: 'border-red-400',
  LAB: 'border-lime-400'
} as const

interface Props extends Omit<Subject, 'is_selective'> {
  actionFn: () => void
  isCurrent: boolean
}

export default function LessonCard(props: Props) {
  const { title, type, teacher, isCurrent, actionFn } = props

  return (
    <Card {...props} className={LESSON_COLORS[type]}>
      <p className="text-neutral-600 dark:text-neutral-200">{teacher}</p>
    </Card>
  )
}

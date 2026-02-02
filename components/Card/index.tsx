import { Button } from '@ui/button'
import clsx from 'clsx'
import { Clock } from 'lucide-react'

import { Subject } from '@/types/subject'

interface Props extends Omit<Subject, 'is_selective'> {
  actionFn: () => void
  isCurrent: boolean
}

const LESSON_COLORS: Record<Subject['type'], string> = {
  LECTURE: 'border-indigo-400',
  PRACTICE: 'border-red-400',
  LAB: 'border-lime-400'
} as const

export default function Card({
  title,
  type,
  teacher,
  isCurrent,
  actionFn
}: Props) {
  return (
    <div
      className={clsx(
        'flex min-h-32 cursor-pointer flex-col items-center justify-between gap-1 rounded-xl border-2 bg-white p-2 transition-all hover:bg-neutral-200 dark:bg-neutral-950 hover:dark:bg-neutral-800',
        'transform transition duration-150 ease-in-out active:scale-95',
        LESSON_COLORS[type]
      )}
      onClick={actionFn}
    >
      {isCurrent && (
        <Button
          size="icon"
          className="absolute top-1 right-1 bg-emerald-500 py-0 hover:bg-emerald-500 dark:bg-emerald-300 dark:hover:bg-emerald-300"
        >
          <Clock />
        </Button>
      )}
      <h2 className="overflow-wrap break-word my-auto w-full text-center text-xl font-bold break-words whitespace-normal">
        {title}
      </h2>
      <p className="text-neutral-600 dark:text-neutral-200">{teacher}</p>
    </div>
  )
}

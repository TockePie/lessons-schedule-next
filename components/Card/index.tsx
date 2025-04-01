import React from 'react'
import clsx from 'clsx'

import { ScheduleProps } from '@/types/schedule'
import getLessonColor from '@/utils/get-lesson-color'
import openLesson from '@/utils/open-lesson'

interface CardProps {
  title: ScheduleProps['title']
  type: ScheduleProps['type']
  teacher: ScheduleProps['teacher']
  url: ScheduleProps['url']
}

const Card = (props: CardProps) => {
  const { title, type, teacher, url } = props

  return (
    <div
      className={clsx(
        'flex min-h-32 cursor-pointer flex-col items-center justify-between gap-1 rounded-lg border-2 bg-white p-2 transition-all hover:bg-neutral-200 dark:bg-neutral-900',
        getLessonColor(type),
        'transform transition duration-150 ease-in-out active:scale-95'
      )}
      onClick={() => openLesson(url)}
    >
      <h2 className="overflow-wrap break-word my-auto w-full text-center text-xl font-bold break-words whitespace-normal">
        {title}
      </h2>
      <p className="text-neutral-600 dark:text-neutral-200">{teacher}</p>
    </div>
  )
}

export default Card

'use client'

import React from 'react'
import { Button } from '@ui/button'
import clsx from 'clsx'
import { Clock } from 'lucide-react'
import { toast } from 'sonner'

import { Subject } from '@/types/subject'
import getLessonColor from '@/utils/get-lesson-color'
import openLesson from '@/utils/open-lesson'

interface CardProps {
  title: Subject['title']
  type: Subject['type']
  teacher: Subject['teacher']
  url?: Subject['url']
  isCurrent: boolean
}

const Card = (props: CardProps) => {
  const { title, type, teacher, url, isCurrent } = props

  const handleClick = () => {
    if (url) {
      openLesson(url)
      return
    }

    toast.error('Заняття не має посилання чи локації')
  }

  return (
    <div
      className={clsx(
        'flex min-h-32 cursor-pointer flex-col items-center justify-between gap-1 rounded-xl border-2 bg-white p-2 transition-all hover:bg-neutral-200 dark:bg-neutral-950 hover:dark:bg-neutral-800',
        'transform transition duration-150 ease-in-out active:scale-95',
        getLessonColor(type)
      )}
      onClick={handleClick}
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

export default Card

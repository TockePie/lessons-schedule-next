import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@ui/dialog'
import { ScrollArea } from '@ui/scroll-area'

import { Schedule } from '@/features/schedule/types/schedule'
import openLesson from '@/utils/open-lesson'

import { Card } from './base-card'
import { LessonCard } from './lesson-card'

interface Props {
  data: Schedule
  length: number
  isCurrent: boolean
}

export function MultipleCard({ data, length, isCurrent }: Props) {
  const Cards = data.map((item) => (
    <DialogClose key={item.id}>
      <LessonCard
        {...item.subject}
        actionFn={openLesson(item.subject.url)}
        isCurrent={false}
      />
    </DialogClose>
  ))

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <Card isCurrent={isCurrent} title={`${length} предметів`}></Card>
      </DialogTrigger>

      <DialogContent className="w-[1000px]">
        <DialogHeader>
          <DialogTitle>Оберіть пару</DialogTitle>
        </DialogHeader>

        <ScrollArea className="size-full max-h-128 rounded-md">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{Cards}</div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

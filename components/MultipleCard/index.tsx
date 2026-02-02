import { toast } from 'sonner'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@ui/dialog'

import { ScheduleProps } from '@/types/schedule'

import Card from '../Card'
import { ScrollArea } from '../ui/scroll-area'

import openLesson from '@/utils/open-lesson'
import LessonCard from '../Card/lesson-card'

interface MultipleCardProps {
  data: ScheduleProps[]
  length: number
  isCurrent: boolean
}

const MultipleCard = (props: MultipleCardProps) => {
  const { data, length, isCurrent } = props

  const Cards = data.map((item) => (
    <DialogClose key={item.id}>
      <LessonCard
        {...item.subject}
        actionFn={() => {
          if (item.subject.url) {
            openLesson(item.subject.url)
            return
          }

          toast.error('Заняття не має посилання чи локації', {
            action: {
              label: 'Додати',
              onClick: () => {}
            }
          })
        }}
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

export default MultipleCard

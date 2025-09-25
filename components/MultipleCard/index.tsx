import React from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@ui/dialog'

import { ScheduleProps } from '@/types/schedule'

import Card from '../Card'
import { ScrollArea } from '../ui/scroll-area'

import DialogTriggerComp from './DialogTriggerComp'

interface MultipleCardProps {
  data: ScheduleProps[]
  length: number
  isCurrent: boolean
}

const MultipleCard = (props: MultipleCardProps) => {
  const { data, length, isCurrent } = props

  const Cards = data.map((item) => (
    <DialogClose key={item.id}>
      <Card {...item.subject} isCurrent={false} />
    </DialogClose>
  ))

  return (
    <Dialog>
      <DialogTriggerComp isCurrent={isCurrent} length={length} />

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

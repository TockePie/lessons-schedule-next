import React from 'react'
import { Button } from '@ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@ui/dialog'
import clsx from 'clsx'
import { Clock } from 'lucide-react'

import { ScheduleProps } from '@/types/schedule'

import Card from '../Card'

interface MultipleCardProps {
  data: ScheduleProps[]
  length: number
  isCurrent: boolean
}

const DialogTriggerComp = ({
  isCurrent,
  length
}: {
  isCurrent: boolean
  length: number
}) => {
  return (
    <DialogTrigger asChild>
      <div
        className={clsx(
          'flex min-h-32 cursor-pointer flex-col items-center justify-between gap-1 rounded-xl border-2 bg-white p-2 transition-all hover:bg-neutral-200 dark:bg-neutral-950 hover:dark:bg-neutral-800',
          'transform transition duration-150 ease-in-out active:scale-95'
        )}
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
          {length} предметів
        </h2>
      </div>
    </DialogTrigger>
  )
}

const MultipleCard = (props: MultipleCardProps) => {
  const { data, length, isCurrent } = props

  return (
    <Dialog>
      <DialogTriggerComp isCurrent={isCurrent} length={length} />

      <DialogContent className="w-[1000px]">
        <DialogHeader>
          <DialogTitle>Оберіть пару</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4">
          {data.map((item, index) => (
            <Card key={index} {...item} isCurrent={false} />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default MultipleCard

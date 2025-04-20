import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@ui/dialog'

import { ScheduleProps } from '@/types/schedule'

import Card from '../Card'

import DialogTriggerComp from './DialogTriggerComp'

interface MultipleCardProps {
  data: ScheduleProps[]
  length: number
  isCurrent: boolean
}

const MultipleCard = (props: MultipleCardProps) => {
  const { data, length, isCurrent } = props

  const Cards = data.map((item, index) => (
    <Card key={index} {...item} isCurrent={false} />
  ))

  return (
    <Dialog>
      <DialogTriggerComp isCurrent={isCurrent} length={length} />

      <DialogContent className="w-[1000px]">
        <DialogHeader>
          <DialogTitle>Оберіть пару</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{Cards}</div>
      </DialogContent>
    </Dialog>
  )
}

export default MultipleCard

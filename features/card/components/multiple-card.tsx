import { PropsWithChildren } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@ui/dialog'
import { ScrollArea } from '@ui/scroll-area'

import { Card } from './base-card'

interface Props extends PropsWithChildren {
  length: number
  isCurrent: boolean
}

export function MultipleCard({ length, isCurrent, children }: Props) {
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
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <DialogClose>{children}</DialogClose>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

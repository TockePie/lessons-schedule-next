import { Children, PropsWithChildren } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@ui/dialog'
import { ScrollArea } from '@ui/scroll-area'

import BaseCard from './base-card'

interface Props extends PropsWithChildren {
  length: number
  isCurrent: boolean
}

export default function MultipleCard({ length, isCurrent, children }: Props) {
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <BaseCard
          isCurrent={isCurrent}
          title={`${length} предметів`}
        ></BaseCard>
      </DialogTrigger>

      <DialogContent className="w-250">
        <DialogHeader>
          <DialogTitle>Оберіть пару</DialogTitle>
        </DialogHeader>

        <ScrollArea className="size-full max-h-128 rounded-md">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {Children.map(children, (child) => (
              <DialogClose asChild>{child}</DialogClose>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

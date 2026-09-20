'use client'

import { PropsWithChildren, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@ui/button'
import { Checkbox } from '@ui/checkbox'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@ui/dialog'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle
} from '@ui/field'
import { ScrollArea } from '@ui/scroll-area'
import { Separator } from '@ui/separator'
import Cookies from 'js-cookie'

import { Schedule } from '@/features/schedule/types/schedule'

interface Props extends PropsWithChildren {
  initialSelected: string[]
  selectives: Schedule
}

export default function SelectivesDialog({
  children,
  initialSelected,
  selectives
}: Props) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string[]>(initialSelected)
  const router = useRouter()

  const toggle = (id: string) => () => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const handleApply = () => {
    Cookies.set('selected_selectives', JSON.stringify(selected), {
      expires: 120
    })
    setOpen(false)
    router.refresh()
  }

  const handleClear = () => {
    Cookies.remove('selected_selectives')
    setSelected([])
    setOpen(false)
    router.refresh()
  }

  const [lecSelectives, pracSelectives] = [
    selectives.filter((value) => value.subject.type === 'LECTURE'),
    selectives.filter(
      (value) =>
        value.subject.type === 'LAB' || value.subject.type === 'PRACTICE'
    )
  ]

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="w-full" asChild>
        {children}
      </DialogTrigger>

      <DialogContent className="w-[1000px]">
        <DialogHeader>
          <DialogTitle>Оберіть вибіркові, які ви хочете бачити</DialogTitle>
        </DialogHeader>

        <ScrollArea className="size-full max-h-96 md:max-h-128">
          <div className="flex flex-col gap-3">
            <p className="ml-2 text-xl font-bold">Лекції</p>
            <FieldGroup className="gap-4">
              {lecSelectives.map((selective) => (
                <FieldLabel
                  key={selective.id}
                  className="flex items-center gap-3"
                >
                  <Field orientation="horizontal">
                    <Checkbox
                      id={selective.id}
                      checked={selected.includes(selective.subject.subject_id)}
                      onCheckedChange={toggle(selective.subject.subject_id)}
                    />
                    <FieldContent>
                      <FieldTitle>{selective.subject.title}</FieldTitle>
                      <FieldDescription>
                        {selective.subject.teacher}
                      </FieldDescription>
                    </FieldContent>
                  </Field>
                </FieldLabel>
              ))}
            </FieldGroup>
          </div>

          <Separator className="my-4" />

          <div className="flex flex-col gap-3">
            <p className="ml-2 text-xl font-bold">Практичні</p>
            <FieldGroup className="gap-4">
              {pracSelectives.map((selective) => (
                <FieldLabel
                  key={selective.id}
                  className="flex items-center gap-3"
                >
                  <Field orientation="horizontal">
                    <Checkbox
                      id={selective.id}
                      checked={selected.includes(selective.subject.subject_id)}
                      onCheckedChange={toggle(selective.subject.subject_id)}
                    />
                    <FieldContent>
                      <FieldTitle>{selective.subject.title}</FieldTitle>
                      <FieldDescription>
                        {selective.subject.teacher}
                      </FieldDescription>
                    </FieldContent>
                  </Field>
                </FieldLabel>
              ))}
            </FieldGroup>
          </div>
        </ScrollArea>

        <DialogFooter>
          <Button variant="outline" onClick={handleClear}>
            Очистити все
          </Button>
          <Button onClick={handleApply}>Застосувати</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

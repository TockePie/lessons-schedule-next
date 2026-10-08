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

import { Schedule } from '@/features/schedule'

interface Props extends PropsWithChildren {
  initialPickedIds: string[]
  groupSelectives: Schedule
}

export default function SelectivesDialog({
  initialPickedIds,
  groupSelectives,
  children
}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [pickedIds, setPickedIds] = useState(() => new Set(initialPickedIds))
  const router = useRouter()

  const toggleSubject = (subjectId: string) => {
    setPickedIds((currentIds) => {
      const next = new Set(currentIds)

      if (next.has(subjectId)) {
        next.delete(subjectId)
      } else {
        next.add(subjectId)
      }

      return next
    })
  }

  const handleWriteCookie = () => {
    Cookies.set('picked-selectives', JSON.stringify([...pickedIds]), {
      expires: 120
    })
    setIsOpen(false)
    router.refresh()
  }

  const handleClearCookie = () => {
    Cookies.remove('picked-selectives')
    setPickedIds(new Set())
    setIsOpen(false)
    router.refresh()
  }

  const grouped = Object.groupBy(groupSelectives, (scheduleItem) => {
    if (scheduleItem.subject.type === 'LECTURE') {
      return 'lectures'
    }

    if (
      scheduleItem.subject.type === 'LAB' ||
      scheduleItem.subject.type === 'PRACTICE'
    ) {
      return 'practicals'
    }

    return 'other'
  })

  const lectureSelectives = grouped.lectures ?? []
  const practiceSelectives = grouped.practicals ?? []

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="w-full" asChild>
        {children}
      </DialogTrigger>

      <DialogContent className="w-250">
        <DialogHeader>
          <DialogTitle>Оберіть вибіркові, які ви хочете бачити</DialogTitle>
        </DialogHeader>

        <ScrollArea className="size-full max-h-96 md:max-h-128">
          <div className="flex flex-col gap-3">
            <p className="ml-2 text-xl font-bold">Лекції</p>
            <FieldGroup className="gap-4">
              {lectureSelectives.map((selective) => (
                <FieldLabel
                  key={selective.id}
                  className="flex items-center gap-3"
                >
                  <Field orientation="horizontal">
                    <Checkbox
                      id={selective.id}
                      checked={pickedIds.has(selective.subject.subject_id)}
                      onCheckedChange={() =>
                        toggleSubject(selective.subject.subject_id)
                      }
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
              {practiceSelectives.map((selective) => (
                <FieldLabel
                  key={selective.id}
                  className="flex items-center gap-3"
                >
                  <Field orientation="horizontal">
                    <Checkbox
                      id={selective.id}
                      checked={pickedIds.has(selective.subject.subject_id)}
                      onCheckedChange={() =>
                        toggleSubject(selective.subject.subject_id)
                      }
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
          <Button variant="outline" onClick={handleClearCookie}>
            Очистити все
          </Button>
          <Button onClick={handleWriteCookie}>Застосувати</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

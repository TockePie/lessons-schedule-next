import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@ui/dialog'
import { FieldGroup } from '@ui/field'
import { ScrollArea } from '@ui/scroll-area'
import { Separator } from '@ui/separator'
import { cookies } from 'next/headers'

import { getAllSelectives } from '@/lib/api'

import { SelectedProvider } from './context/selected'
import SelectivesFooter from './selectives-footer'
import TypeSelectives from './type-selectives'

export default async function SelectSelectives({
  children
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const groupId = cookieStore.get('groupId')?.value
  if (!groupId) return null

  const savedSelectivesRaw = cookieStore.get('selected_selectives')?.value
  const savedSelectives: string[] = savedSelectivesRaw
    ? JSON.parse(savedSelectivesRaw)
    : []

  const selectives = await getAllSelectives(groupId)

  return (
    <Dialog>
      <DialogTrigger className="w-full" asChild>
        {children}
      </DialogTrigger>

      <DialogContent className="w-[1000px]">
        <DialogHeader>
          <DialogTitle>Оберіть вибіркові, які ви хочете бачити</DialogTitle>
        </DialogHeader>

        <SelectedProvider initial={savedSelectives}>
          <ScrollArea className="size-full max-h-96 md:max-h-128">
            <div className="flex flex-col gap-3">
              <p className="mt-4 ml-2 text-xl font-bold">Лекції</p>
              <FieldGroup className="gap-4">
                <TypeSelectives
                  selectives={selectives}
                  type="LECTURE"
                  selected={savedSelectives}
                />
              </FieldGroup>
            </div>

            <Separator className="mt-5 mb-4" />

            <div className="flex flex-col gap-3">
              <p className="ml-2 text-xl font-bold">Лабораторні</p>
              <FieldGroup className="gap-4">
                <TypeSelectives
                  selectives={selectives}
                  type="LAB"
                  selected={savedSelectives}
                />
              </FieldGroup>
            </div>
          </ScrollArea>

          <SelectivesFooter />
        </SelectedProvider>
      </DialogContent>
    </Dialog>
  )
}

//TODO: It should have: reset group, link to form to write about missing information

import React from 'react'
import { Button } from '@ui/button'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@ui/sheet'
import { ClipboardPenLine, HelpCircle, Menu, Plus } from 'lucide-react'
import Link from 'next/link'

import GitHubLogo from '@/icons/GitHubIcon'

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent className="max-sm:w-5/6">
        <SheetHeader>
          <SheetTitle className="text-2xl">Меню</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-y-2 px-3">
          <Button variant="secondary" className="h-10" asChild>
            <Link href="https://forms.gle/yvn6Xw1hUheGkkvi8" target="_blank">
              <Plus size="32" /> Додати групу
            </Link>
          </Button>

          <div className="flex flex-col items-start gap-y-5 p-2">
            <p className="text-xl font-semibold">Сторінки</p>

            <Link href="/exams" className="flex items-center gap-x-2">
              <ClipboardPenLine /> Іспити
            </Link>

            <Link href="/help" className="flex items-center gap-x-2">
              <HelpCircle />
              Допомога
            </Link>
          </div>
        </div>

        <SheetFooter>
          <Link
            href="https://github.com/TockePie"
            target="_blank"
            className="text-muted-foreground flex cursor-pointer items-center justify-center gap-x-2 px-4"
          >
            <GitHubLogo
              width={28}
              height={28}
              color="var(--muted-foreground)"
            />
            <p className="font-semibold">Maxim Rocky</p>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default Sidebar

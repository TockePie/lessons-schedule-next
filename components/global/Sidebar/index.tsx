//TODO: It should have: reset group, link to form to write about missing information

import { Button } from '@ui/button'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@ui/sheet'
import clsx from 'clsx'
import { Menu, Plus } from 'lucide-react'
import Link from 'next/link'

import ClearCacheBtn from '@/components/ClearCacheBtn'
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

        <div className="flex flex-col gap-y-4 px-5">
          <Button variant="secondary" className="h-10" asChild>
            <Link href="https://forms.gle/yvn6Xw1hUheGkkvi8" target="_blank">
              <Plus size="32" /> Додати групу
            </Link>
          </Button>

          <ClearCacheBtn className="h-10" />

          <div className="mx-auto flex w-full max-w-360 flex-col gap-2">
            <p className="text-xl font-semibold">Кольори</p>

            <div className="flex flex-col items-start gap-y-3 py-2">
              {[
                { type: 'LECTURE', name: 'Лекції', color: 'bg-indigo-400' },
                { type: 'PRACTICE', name: 'Практики', color: 'bg-red-400' },
                { type: 'LAB', name: 'Лабораторні', color: 'bg-lime-400' }
              ].map((item) => (
                <div key={item.type} className="flex items-center gap-2">
                  <div className={clsx('h-5 w-5 rounded-sm', item.color)} /> -{' '}
                  {item.name}
                </div>
              ))}
            </div>
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

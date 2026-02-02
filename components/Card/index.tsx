import { Button } from '@ui/button'
import clsx from 'clsx'
import { Clock } from 'lucide-react'

import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  isCurrent: boolean
  title: string
  className?: string
  actionFn?: () => void
}

export default function Card({
  children,
  isCurrent,
  title,
  className,
  actionFn
}: Props) {
  return (
    <div
      className={clsx(
        'flex min-h-32 cursor-pointer flex-col items-center justify-between gap-1 rounded-xl border-2 bg-white p-2 transition-all hover:bg-neutral-200 dark:bg-neutral-950 hover:dark:bg-neutral-800',
        'transform transition duration-150 ease-in-out active:scale-95',
        className
      )}
      onClick={actionFn}
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
        {title}
      </h2>
      {children}
    </div>
  )
}

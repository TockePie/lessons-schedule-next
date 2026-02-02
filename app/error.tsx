'use client'

import { useEffect } from 'react'
import { Button } from '@ui/button'
import { Textarea } from '@ui/textarea'

import copyToClipboard from '@/utils/copy-to-clipboard'
import ClearCacheBtn from '@/components/global/ClearCacheBtn'

interface Props {
  error: Error
  resetFn: () => void
}

export default function Error({ error, resetFn }: Props) {
  useEffect(() => console.error(error), [error])

  const handleCopy = () => copyToClipboard(error)
  const handleReset = () => resetFn()

  return (
    <main className="flex h-screen flex-col items-center justify-between gap-4 py-10 md:gap-8 md:py-6">
      <div className="flex w-full flex-col items-center gap-4">
        <h2 className="text-3xl font-bold lg:text-4xl">Виникла помилка</h2>
        <h3 className="max-w-72 text-lg font-semibold lg:text-2xl">
          {error.name}
        </h3>
        <Textarea
          className="min-h-20 w-11/12 resize-none md:w-1/2"
          readOnly
          value={error.message}
        />
      </div>
      <div className="flex flex-col-reverse gap-4 md:flex-row">
        <Button
          variant="outline"
          onClick={handleCopy}
          className="cursor-pointer"
        >
          Скопіювати текст помилки
        </Button>
        <ClearCacheBtn />
        <Button onClick={handleReset} className="cursor-pointer">
          Спробувати ще раз
        </Button>
      </div>
    </main>
  )
}

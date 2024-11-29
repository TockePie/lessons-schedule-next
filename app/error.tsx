'use client'

import { FC, useEffect } from 'react'
import { Button, Textarea } from '@nextui-org/react'

import { ERROR_TEXTS } from '@/common/constants/texts'

interface ErrorProps {
  error: Error
  reset: () => void
}

const Error: FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => console.error(error), [error])

  const copyToClipboard = () => navigator.clipboard.writeText(error.message)

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-4 md:gap-8 md:py-6">
      <h2 className="text-2xl font-bold lg:text-4xl">{ERROR_TEXTS.title}</h2>
      <Textarea
        isReadOnly
        variant="bordered"
        label={ERROR_TEXTS.textareaLabel}
        labelPlacement="outside"
        defaultValue={error.message}
        className="md:w-1/2"
      />
      <div className="flex gap-4">
        <Button onClick={copyToClipboard}>{ERROR_TEXTS.copyButton}</Button>
        <Button color="primary" onClick={() => reset()}>
          {ERROR_TEXTS.retryButton}
        </Button>
      </div>
    </section>
  )
}

export default Error

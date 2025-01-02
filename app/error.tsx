'use client'

import { FC, ReactNode, useEffect, useState } from 'react'
import { Button, Textarea } from '@nextui-org/react'
import { Check } from 'lucide-react'

import { ERROR_TEXTS } from '@/common/constants/texts'

interface ErrorProps {
  error: Error
  reset: () => void
}

const Error: FC<ErrorProps> = ({ error, reset }) => {
  const [copyText, setCopyText] = useState<ReactNode>(ERROR_TEXTS.copyButton)
  useEffect(() => console.error(error), [error])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(error.message)
    setCopyText(<Check />)
    setTimeout(() => setCopyText(ERROR_TEXTS.copyButton), 2000)
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-4 md:gap-8 md:py-6">
      <h2 className="text-2xl font-bold lg:text-4xl">{ERROR_TEXTS.title}</h2>
      <Textarea
        isReadOnly
        variant="bordered"
        labelPlacement="outside"
        label={ERROR_TEXTS.textareaLabel}
        defaultValue={error.message}
        className="md:w-1/2"
      />
      <div className="flex gap-4">
        <Button onPress={copyToClipboard}>{copyText}</Button>
        <Button color="primary" onPress={() => reset()}>
          {ERROR_TEXTS.retryButton}
        </Button>
      </div>
    </section>
  )
}

export default Error

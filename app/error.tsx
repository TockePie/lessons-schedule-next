'use client'

import { FC, useEffect, useState } from 'react'
import { Button, Textarea } from '@nextui-org/react'

import { ERROR_TEXTS } from '@/common/constants/texts'

import CopiedAlert from './components/error/copied-alert'
import { AlertColor } from './components/error/types/alert-props'

interface ErrorProps {
  error: Error
  reset: () => void
}

const Error: FC<ErrorProps> = ({ error, reset }) => {
  const [showAlert, setShowAlert] = useState({
    isVisible: false,
    title: '',
    description: '',
    color: AlertColor.DEFAULT
  })

  useEffect(() => console.error(error), [error])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(error.message).then(
      () => {
        setShowAlert({
          isVisible: true,
          title: 'Copied to clipboard',
          description: '',
          color: AlertColor.SUCCESS
        })
      },
      () => {
        setShowAlert({
          isVisible: true,
          title: 'Failed to copy to clipboard',
          description: "Maybe your browser doesn\'t support this function",
          color: AlertColor.DANGER
        })
      }
    )
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
        <Button onPress={copyToClipboard}>{ERROR_TEXTS.copyButton}</Button>
        <Button color="primary" onPress={() => reset()}>
          {ERROR_TEXTS.retryButton}
        </Button>
      </div>
      <CopiedAlert showAlert={showAlert} setShowAlert={setShowAlert} />
    </section>
  )
}

export default Error

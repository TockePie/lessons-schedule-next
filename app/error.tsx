'use client'

import { FC, useEffect } from 'react'
import { Button, Textarea } from '@nextui-org/react'

import { ERROR_TEXTS } from '@/common/constants/texts'
import styles from '@/styles/app/errorLoading.module.scss'

interface ErrorProps {
  error: Error
  reset: () => void
}

const Error: FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => console.error(error), [error])

  const copyToClipboard = () => navigator.clipboard.writeText(error.message)

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{ERROR_TEXTS.title}</h2>
      <Textarea
        isReadOnly
        variant="bordered"
        label={ERROR_TEXTS.textareaLabel}
        labelPlacement="outside"
        defaultValue={error.message}
        className={styles.textarea}
      />
      <div className={styles.buttons}>
        <Button onClick={copyToClipboard}>{ERROR_TEXTS.copyButton}</Button>
        <Button color="primary" onClick={() => reset()}>
          {ERROR_TEXTS.retryButton}
        </Button>
      </div>
    </section>
  )
}

export default Error

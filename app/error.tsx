'use client'

import { useEffect } from 'react'
import { Button, Textarea } from '@nextui-org/react'

import { ERROR_TEXTS } from '@/common/constants/texts'
import styles from '@/styles/app/error.module.scss'

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => console.error(error), [error])

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
        <Button onClick={() => navigator.clipboard.writeText(error.message)}>
          {ERROR_TEXTS.copyButton}
        </Button>
        <Button color="primary" onClick={() => reset()}>
          {ERROR_TEXTS.retryButton}
        </Button>
      </div>
    </section>
  )
}

export default Error

import { Spinner } from '@nextui-org/react'

import { LOADING_TEXTS } from '@/common/constants/texts'
import styles from '@/styles/app/errorLoading.module.scss'

const Loading = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{LOADING_TEXTS.title}</h2>
      <Spinner size="lg" />
    </section>
  )
}

export default Loading

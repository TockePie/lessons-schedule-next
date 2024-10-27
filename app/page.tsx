'use client'

import { useRouter } from 'next/navigation'

import TableComponent from '@/components/Table/TableComponent'

import styles from './page.module.scss'

const Home = () => {
  const router = useRouter()

  if (localStorage.getItem('groupId'))
    router.push(`/${localStorage.getItem('groupId')}`)

  return (
    <section className={styles.section}>
      <TableComponent />
    </section>
  )
}

export default Home

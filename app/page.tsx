'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import TableComponent from '@/components/Table/TableComponent'

import styles from './page.module.scss'

const Home = () => {
  const router = useRouter()

  useEffect(() => {
    if (localStorage != undefined && localStorage.getItem('groupId')) {
      router.push(`/${localStorage.getItem('groupId')}`)
    }
  }, [router])

  return (
    <section className={styles.section}>
      <TableComponent />
    </section>
  )
}

export default Home

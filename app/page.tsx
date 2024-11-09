import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import TableComponent from '@/components/Table/TableComponent'

import styles from '@/styles/app/page.module.scss'

const Home = async () => {
  const cookieStore = await cookies()
  const groupId = cookieStore.get('groupId')?.value

  if (groupId) {
    redirect(`/${groupId}`)
  }

  return (
    <section className={styles.section}>
      <TableComponent />
    </section>
  )
}

export default Home

import TableComponent from '@/components/Table/TableComponent'
import WeekTab from './components/WeekTab'

import styles from '@/styles/app/page.module.scss'

const Home = () => {
  return (
    <section className={styles.section}>
      <WeekTab />
      <TableComponent />
    </section>
  )
}

export default Home

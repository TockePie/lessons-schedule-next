import TableComponent from '@/components/Table/TableComponent'
import WeekTab from './components/WeekTab'

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-6">
      <WeekTab />
      <TableComponent />
    </section>
  )
}

export default Home

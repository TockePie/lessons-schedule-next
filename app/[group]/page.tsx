import WeekTab from '@/components/Navbar/components/WeekTab/WeekTab'
import TableComponent from '@/components/Table/TableComponent'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-6">
      <WeekTab />
      <TableComponent />
    </section>
  )
}

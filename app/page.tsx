import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import TableComponent from '@/components/Table/TableComponent'

const Home = async () => {
  const cookieStore = await cookies()
  const groupId = cookieStore.get('groupId')?.value

  if (groupId) {
    redirect(`/${groupId}`)
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-6">
      <TableComponent />
    </section>
  )
}

export default Home

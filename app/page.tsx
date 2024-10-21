'use client'

import { useRouter } from 'next/navigation'

import TableComponent from '@/components/Table/TableComponent'

export default function Home() {
  const router = useRouter()

  if (localStorage.getItem('groupId'))
    router.push(`/${localStorage.getItem('groupId')}`)

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-6">
      <TableComponent />
    </section>
  )
}

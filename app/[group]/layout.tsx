import { PropsWithChildren } from 'react'
import { Metadata } from 'next'

import Navbar from '@/features/navbar'

export const metadata: Metadata = {
  title: 'Lessons Schedule',
  description: 'A simple schedule for lessons'
}

interface Props extends PropsWithChildren {
  params: Promise<{ groupId: string }>
}

export default async function PageLayout({ children, params }: Props) {
  const { groupId } = await params

  return (
    <>
      <Navbar groupId={groupId} />
      {children}
    </>
  )
}

import { Metadata } from 'next'

import Navbar from '@/components/Navbar'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'Lessons Schedule',
  description: 'A simple schedule for lessons'
}

interface Props extends PropsWithChildren {
  params: Promise<{ group: string }>
}

export default async function PageLayout({ children, params }: Props) {
  const { group } = await params

  return (
    <>
      <Navbar groupId={group} />
      {children}
    </>
  )
}

import { Metadata } from 'next'

import Navbar from '@/components/global/Navbar'

const metadata: Metadata = {
  title: 'Lessons Schedule',
  description: 'A simple schedule for lessons'
}

const PageLayout = async ({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ group: string }>
}) => {
  const { group } = await params

  return (
    <>
      <Navbar groupId={group} />
      {children}
    </>
  )
}

export { metadata }
export default PageLayout

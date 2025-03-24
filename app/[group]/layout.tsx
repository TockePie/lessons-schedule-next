import React, { ReactNode } from 'react'
import { Metadata } from 'next'

import Navbar from '@/components/global/Navbar'

const metadata: Metadata = {
  title: 'Lessons Schedule',
  description: 'A simple schedule for lessons'
}

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export { metadata }
export default PageLayout

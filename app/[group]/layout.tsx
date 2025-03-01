import React, { ReactNode } from 'react'
import { Metadata } from 'next'

import Navbar from '@/components/global/Navbar'

export const metadata: Metadata = {
  title: 'Lessons Schedule',
  description: 'A simple schedule for lessons'
}

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

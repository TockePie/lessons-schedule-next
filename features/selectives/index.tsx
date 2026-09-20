import React from 'react'
import { cookies } from 'next/headers'

import { parseCookie } from '@/utils/parse-cookie'

import { getAllSelectives } from './api/selectives'
import SelectivesDialog from './components/dialog'

export default async function SelectSelectives({
  children
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const groupId = cookieStore.get('groupId')?.value
  if (!groupId) return null

  const savedSelectives = parseCookie(
    cookieStore.get('selected_selectives')?.value
  )
  const selectives = await getAllSelectives(groupId)

  return (
    <SelectivesDialog initialSelected={savedSelectives} selectives={selectives}>
      {children}
    </SelectivesDialog>
  )
}

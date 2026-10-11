import React from 'react'
import { cookies } from 'next/headers'

import { parseStringArray } from '@/utils/parse-string-array'

import { getGroupSelectives } from './api/selectives'
import SelectivesDialog from './components/dialog'

export default async function SelectivesPicker({
  children
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const groupId = cookieStore.get('groupId')?.value
  if (!groupId) return null

  const pickedSelectives = parseStringArray(
    cookieStore.get('picked-selectives')?.value
  )
  const availableSelectives = await getGroupSelectives(groupId)

  return (
    <SelectivesDialog
      initialPickedIds={pickedSelectives}
      groupSelectives={availableSelectives}
    >
      {children}
    </SelectivesDialog>
  )
}

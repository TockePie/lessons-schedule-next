import React from 'react'
import { UUID } from 'crypto'
import { cookies } from 'next/headers'

import GroupList from '@/components/GroupList'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getGroupById } from '@/lib/api'

export default async function Navbar() {
  const cookieStore = await cookies()
  const groupId = cookieStore.get('groupId')?.value as UUID
  const groupData = groupId ? await getGroupById(groupId) : undefined

  const logo =
    groupData && 'photo' in groupData
      ? String(groupData.photo)
      : '/default-logo.png'

  return (
    <nav className="border-b px-4 py-2 md:px-8 lg:px-16 dark:bg-neutral-950">
      <div className="mx-auto flex max-w-[1024px] items-center justify-between">
        <div className="flex items-center gap-x-3">
          <Avatar className="h-12 w-12 rounded-xl">
            <AvatarImage src={logo} alt="Avatar" />
            <AvatarFallback className="rounded-xl">LS</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold">Розклад</h1>
        </div>

        <GroupList {...{ groupData }} />
      </div>
    </nav>
  )
}

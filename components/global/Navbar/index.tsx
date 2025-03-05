'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import GroupList from '@/components/GroupList'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getGroupById } from '@/lib/api'
import { GroupProps } from '@/types/group'
import { InternalServerErrorProps } from '@/types/internal-error'

export default function Navbar() {
  const [groupData, setGroupData] = useState<
    GroupProps | InternalServerErrorProps
  >()
  const [logo, setLogo] = useState<string>()
  const pathname = usePathname()

  useEffect(() => {
    const fetchGroupData = async () => {
      const groupId = pathname.split('/')[1] as string
      const data = await getGroupById(groupId)
      setGroupData(data)
      setLogo('photo' in data ? data.photo : '/default-logo.png')
    }

    fetchGroupData().catch((error) => {
      console.error('Failed to fetch group data:', error)
    })
  }, [pathname])

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

'use client'

import React, { Key, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { getGroupsList } from '@/lib/api'
import { GroupProps } from '@/types/group'
import { GroupsListProps } from '@/types/group-list'
import { InternalServerErrorProps } from '@/types/internal-error'

export default function GroupList({
  groupData,
  className
}: {
  groupData: GroupProps | InternalServerErrorProps | undefined
  className?: string
}) {
  const router = useRouter()
  const [groupsList, setGroupsList] = useState<
    GroupsListProps[] | InternalServerErrorProps
  >([])

  useEffect(() => {
    const fetchGroupsList = async () => {
      const data = await getGroupsList()
      setGroupsList(data)
    }

    fetchGroupsList().catch((error) => {
      console.error('Failed to fetch groups list:', error)
    })
  }, [])

  const isError = 'error' in groupsList

  const buttonText = isError
    ? `Помилка ${groupsList.error.status}`
    : !groupData || 'error' in groupData
      ? 'Оберіть групу'
      : groupData.name

  const handleGroup = async (key: Key) => {
    if (key === Cookies.get('groupId')) return

    Cookies.set('groupId', key.toString())
    router.push(`/${key}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={className} disabled={isError}>
          {buttonText}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup
          value={groupData && !('error' in groupData) ? groupData.group_id : ''}
        >
          {!isError &&
            groupsList.map((group: GroupsListProps) => (
              <DropdownMenuRadioItem
                key={group.group_id}
                value={group.group_id}
                className="h-9"
              >
                <Link
                  href={`/${group.group_id}`}
                  onClick={() => handleGroup(group.group_id)}
                  className="w-full"
                >
                  {group.name}
                </Link>
              </DropdownMenuRadioItem>
            ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

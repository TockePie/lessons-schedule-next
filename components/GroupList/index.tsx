'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Button } from '@ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '@ui/dropdown-menu'
import Cookies from 'js-cookie'
import { usePathname, useRouter } from 'next/navigation'

import { getGroupById, getGroupsList } from '@/lib/api'

export default function GroupList({ className }: { className?: string }) {
  const pathname = usePathname()
  const router = useRouter()

  const groupId = pathname.split('/')[1]

  const {
    data: groups = [],
    isLoading: isGroupsLoading,
    isError: isGroupsError,
    error: groupsError
  } = useQuery({
    queryKey: ['groupsList'],
    queryFn: getGroupsList,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24 // 1 day
  })

  const { data: currentGroup, isLoading: isCurrentGroupLoading } = useQuery({
    queryKey: ['group', groupId],
    queryFn: () => getGroupById(groupId),
    enabled: !!groupId,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24 // 1 day
  })

  const handleGroupSelect = (newGroupId: string) => {
    if (newGroupId === currentGroup?.group_id) return

    Cookies.set('groupId', newGroupId)
    router.push(`/${newGroupId}`)
  }

  const isLoading = isGroupsLoading || isCurrentGroupLoading

  const errorMessage = isGroupsError
    ? `Помилка: ${groupsError instanceof Error ? groupsError.message : 'Failed to load data'}`
    : null

  const buttonText = errorMessage
    ? errorMessage
    : currentGroup
      ? currentGroup.name
      : 'Оберіть групу'

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={className}
          disabled={!!errorMessage || isLoading}
        >
          {isLoading ? 'Завантаження...' : buttonText}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={currentGroup?.group_id || ''}>
          {groups.map((group) => (
            <DropdownMenuRadioItem
              key={group.group_id}
              value={group.group_id}
              className="h-9"
              onClick={() => handleGroupSelect(group.group_id)}
            >
              {group.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

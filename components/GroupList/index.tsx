'use client'

import React, { useEffect, useState } from 'react'
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
import { GroupProps } from '@/types/group'
import { GroupsListProps } from '@/types/group-list'

export default function GroupList({ className }: { className?: string }) {
  const [currentGroup, setCurrentGroup] = useState<GroupProps | null>(null)
  const [groups, setGroups] = useState<GroupsListProps[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    void (async () => {
      setIsLoading(true)
      try {
        const groupsData = await getGroupsList()
        if ('error' in groupsData) {
          setError(`Error ${groupsData.error.status}`)
          return
        }
        setGroups(groupsData)

        const groupId = pathname.split('/')[1]
        if (groupId) {
          const groupData = await getGroupById(groupId)
          if (!('error' in groupData)) {
            setCurrentGroup(groupData)
          }
        }
      } catch (err) {
        setError('Failed to load data')
        console.error('Data loading error:', err)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [pathname])

  const handleGroupSelect = (groupId: string) => {
    if (groupId === currentGroup?.group_id) return

    Cookies.set('groupId', groupId)
    router.push(`/${groupId}`)
  }

  const buttonText = error
    ? `Помилка: ${error}`
    : currentGroup
      ? currentGroup.name
      : 'Оберіть групу'

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={className}
          disabled={!!error || isLoading}
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

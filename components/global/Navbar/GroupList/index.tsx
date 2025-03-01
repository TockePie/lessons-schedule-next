import React from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { getGroupsList } from '@/lib/api'
import { GroupsListProps } from '@/types/group-list'

import Choose from './Choose'

export default async function GroupList({
  groupData
}: {
  groupData: GroupsListProps
}) {
  const groupsList = await getGroupsList()

  if (groupsList.statusCode === 500) throw new Error('Internal Server Error')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{groupData?.name || 'Оберіть групу'}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={groupData?.group_id || ''}>
          {groupsList.map((group: GroupsListProps) => (
            <DropdownMenuRadioItem
              key={group.group_id}
              value={group.group_id}
              className="h-9"
            >
              <Choose {...group} />
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

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
import { GroupProps } from '@/types/group'
import { GroupsListProps } from '@/types/group-list'
import { InternalServerErrorProps } from '@/types/internal-error'

import Choose from './Choose'

export default async function GroupList({
  groupData,
  className
}: {
  groupData: GroupProps | InternalServerErrorProps | undefined
  className?: string
}) {
  const groupsList = await getGroupsList()
  const isError = 'error' in groupsList

  const buttonText = isError
    ? `Помилка ${groupsList.error.status}`
    : !groupData || 'error' in groupData
      ? 'Оберіть групу'
      : groupData.name

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
                <Choose {...group} />
              </DropdownMenuRadioItem>
            ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

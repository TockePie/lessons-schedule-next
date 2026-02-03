'use client'

import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { useQuery } from '@tanstack/react-query'
import { Button } from '@ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@ui/dropdown-menu'
import clsx from 'clsx'
import Cookies from 'js-cookie'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { getGroupById, getGroupsList } from '@/lib/api'

interface GroupListProps {
  className?: string
  variant?:
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | null
    | undefined
}

const GroupList = (props: GroupListProps) => {
  const { className, variant = 'outline' } = props

  const pathname = usePathname()
  const router = useRouter()

  const groupId = pathname.split('/')[1]
  const cookieGroupId = Cookies.get('groupId')

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

  const GroupsItems = groups.map((group) => (
    <DropdownMenuRadioItem
      key={group.group_id}
      value={group.group_id}
      className="h-9"
      onClick={() => handleGroupSelect(group.group_id)}
    >
      {group.name}
    </DropdownMenuRadioItem>
  ))

  const handleGroupSelect = (newGroupId: string) => {
    if (newGroupId === currentGroup?.group_id) return

    Cookies.set('groupId', newGroupId, {
      expires: 30
    })
    router.push(`/${newGroupId}`)
  }

  if (isGroupsError) {
    toast.error(
      `Помилка: ${groupsError instanceof Error ? groupsError.message : 'Failed to load data'}`
    )
  }

  const isLoading = isGroupsLoading || isCurrentGroupLoading
  const errorMessage = isGroupsError ? 'Помилка' : null

  const buttonText = !cookieGroupId
    ? 'Оберіть групу'
    : errorMessage
      ? errorMessage
      : currentGroup
        ? currentGroup.name
        : 'Оберіть групу'

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={variant}
          className={clsx(className, 'cursor-pointer')}
          disabled={!!errorMessage || isLoading}
        >
          {isLoading ? 'Завантаження...' : buttonText}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={currentGroup?.group_id || ''}>
          {GroupsItems}
        </DropdownMenuRadioGroup>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="focus:bg-accent focus:text-accent-foreground mr-3 flex h-9 w-full items-center gap-2 rounded-sm"
            asChild
          >
            <Link href="https://forms.gle/yvn6Xw1hUheGkkvi8" target="_blank">
              <Plus size="18" className="ml-1" />
              <span className="text-sm">Додати групу</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default GroupList

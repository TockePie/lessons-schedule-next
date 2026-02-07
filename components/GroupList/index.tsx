import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { Button } from '@ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@ui/dropdown-menu'
import { Plus } from 'lucide-react'
import { cookies } from 'next/headers'
import Link from 'next/link'

import { getGroupsList } from '@/lib/api'

import GroupSelectItem from './list-item'

export default async function GroupList() {
  const groups = await getGroupsList()

  const cookieStore = await cookies()
  const cookieGroupId = cookieStore.get('groupId')?.value

  const currentGroup = groups.find((group) => group.group_id === cookieGroupId)

  const buttonText = !cookieGroupId
    ? 'Оберіть групу'
    : currentGroup
      ? currentGroup.name
      : 'Оберіть групу'

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          {buttonText}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={currentGroup?.group_id || ''}>
          {groups.map((group) => (
            <GroupSelectItem
              key={group.group_id}
              groupId={group.group_id}
              name={group.name}
            />
          ))}
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

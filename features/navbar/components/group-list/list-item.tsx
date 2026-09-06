'use client'

import { DropdownMenuRadioItem } from '@ui/dropdown-menu'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

import { GroupListItem } from '../../types/group'

type Props = GroupListItem & {
  currentGroup?: string
}

export default function GroupSelectItem({
  group_id,
  name,
  currentGroup
}: Props) {
  const router = useRouter()

  const handleSelect = async () => {
    if (group_id === currentGroup) return
    Cookies.set('groupId', group_id, {
      expires: 30
    })

    router.push(`/${group_id}`)
    router.refresh()
  }

  return (
    <DropdownMenuRadioItem
      value={group_id}
      onClick={handleSelect}
      className="h-9"
    >
      {name}
    </DropdownMenuRadioItem>
  )
}

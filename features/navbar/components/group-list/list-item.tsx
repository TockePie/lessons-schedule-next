'use client'

import { DropdownMenuRadioItem } from '@ui/dropdown-menu'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

import { GroupListItem } from '../../types/group'

export default function GroupSelectItem({ group_id, name }: GroupListItem) {
  const router = useRouter()
  const cookieGroupId = Cookies.get('group_id')

  const handleSelect = async () => {
    if (group_id === cookieGroupId) return
    Cookies.set('group_id', group_id, {
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

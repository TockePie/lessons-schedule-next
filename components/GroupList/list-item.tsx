'use client'

import { DropdownMenuRadioItem } from '@ui/dropdown-menu'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

interface Props {
  groupId: string
  name: string
}

export default function GroupSelectItem({ groupId, name }: Props) {
  const router = useRouter()
  const cookieGroupId = Cookies.get('groupId')

  const handleSelect = () => {
    if (groupId === cookieGroupId) return

    Cookies.set('groupId', groupId, {
      expires: 30
    })

    router.push(`/${groupId}`)
    router.refresh()
  }

  return (
    <DropdownMenuRadioItem
      value={groupId}
      onClick={handleSelect}
      className="h-9"
    >
      {name}
    </DropdownMenuRadioItem>
  )
}

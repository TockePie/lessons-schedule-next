'use client'

import { useState } from 'react'
import { DropdownMenuRadioItem } from '@ui/dropdown-menu'
import { useRouter } from 'next/navigation'

interface Props {
  groupId: string
  name: string
}

export default function GroupSelectItem({ groupId, name }: Props) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSelect = async () => {
    setLoading(true)

    await fetch('/api/set-group', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ groupId })
    })

    router.push(`/${groupId}`)
    router.refresh()
    setLoading(false)
  }

  return (
    <DropdownMenuRadioItem
      value={groupId}
      onClick={handleSelect}
      disabled={loading}
      className="h-9"
    >
      {loading ? 'Завантаження...' : name}
    </DropdownMenuRadioItem>
  )
}

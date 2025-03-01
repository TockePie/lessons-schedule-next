'use client'

import React, { Key } from 'react'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { GroupsListProps } from '@/types/group-list'

export default function Choose({ group_id, name }: GroupsListProps) {
  const router = useRouter()

  const handleGroup = async (key: Key) => {
    if (key === Cookies.get('groupId')) return

    Cookies.set('groupId', key.toString())
    router.push(`/${key}`)
  }

  return (
    <Link
      href={`/${group_id}`}
      onClick={() => handleGroup(group_id)}
      className="w-full"
    >
      {name}
    </Link>
  )
}

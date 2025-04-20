'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { AvatarImage } from '@ui/avatar'
import { usePathname } from 'next/navigation'

import { getGroupById } from '@/lib/api'

const AvatarLogo = () => {
  const pathname = usePathname()
  const groupId = pathname.split('/')[1]

  const { data } = useQuery({
    queryKey: ['group', groupId],
    queryFn: () => getGroupById(groupId),
    enabled: !!groupId,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24 // 1 day
  })

  return <AvatarImage src={data?.photo} alt="Avatar" />
}

export default AvatarLogo

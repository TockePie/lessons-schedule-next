'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import { AvatarImage } from '@/components/ui/avatar'
import { getGroupById } from '@/lib/api'

export default function AvatarLogo() {
  const [logo, setLogo] = useState<string>()
  const pathname = usePathname()

  useEffect(() => {
    const fetchGroupData = async () => {
      const groupId = pathname.split('/')[1] as string
      const data = await getGroupById(groupId)
      setLogo('photo' in data ? data.photo : '/default-logo.png')
    }

    fetchGroupData().catch((error) => {
      console.error('Failed to fetch group data:', error)
    })
  }, [pathname])

  return <AvatarImage src={logo} alt="Avatar" />
}

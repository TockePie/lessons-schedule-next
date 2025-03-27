'use client'

import React, { useEffect, useState } from 'react'
import { AvatarImage } from '@ui/avatar'
import { usePathname } from 'next/navigation'

import { getGroupById } from '@/lib/api'

const AvatarLogo = () => {
  const [logo, setLogo] = useState<string>()
  const pathname = usePathname()

  useEffect(() => {
    void (async () => {
      const groupId = pathname.split('/')[1] as string
      const data = await getGroupById(groupId)
      setLogo('photo' in data ? data.photo : '/default-logo.png')
    })()
  }, [pathname])

  return <AvatarImage src={logo} alt="Avatar" />
}

export default AvatarLogo

import React from 'react'
import { Avatar, AvatarFallback } from '@ui/avatar'

import GroupList from '@/components/GroupList'

import AvatarLogo from './AvatarLogo'

const Navbar = () => {
  return (
    <nav className="border-b px-4 py-2 select-none md:px-8 lg:px-16 dark:bg-neutral-950">
      <div className="mx-auto flex max-w-[1024px] items-center justify-between">
        <div className="flex items-center gap-x-3">
          <Avatar className="h-12 w-12 rounded-xl">
            <AvatarLogo />
            <AvatarFallback className="rounded-xl">LS</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold">Розклад</h1>
        </div>

        <GroupList />
      </div>
    </nav>
  )
}

export default Navbar

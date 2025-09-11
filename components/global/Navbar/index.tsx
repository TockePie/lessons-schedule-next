import React from 'react'
import { Avatar, AvatarFallback } from '@ui/avatar'
import { Badge } from '@ui/badge'

import GroupList from '@/components/global/GroupList'

import Sidebar from '../Sidebar'

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
          <h1 className="text-2xl font-bold max-sm:hidden">Розклад</h1>
          <Badge variant="secondary" className="bg-amber-400 dark:bg-amber-700">
            Testing
          </Badge>
        </div>

        <div className="flex items-center gap-x-3">
          <GroupList />
          <Sidebar />
        </div>
      </div>
    </nav>
  )
}

export default Navbar

'use client'

import { useEffect, useState } from 'react'
import { isMobile, isMobileOnly } from 'react-device-detect'
import {
  Chip,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent
} from '@nextui-org/react'
import Link from 'next/link'

import { NAVBAR_TEXTS } from '@/common/constants/texts'
import useGroup from '@/common/providers/group'

import DrawerComp from './components/Drawer'
import GroupDropdownMenu from './components/DropdownMenu'

const NavbarComponent = () => {
  const [isClient, setIsClient] = useState(false)
  const { logo } = useGroup()

  useEffect(() => setIsClient(true), [])

  const isBordered = isClient ? isMobile : false
  const shouldHideOnScroll = isClient ? isMobileOnly : false

  return (
    <Navbar isBordered={isBordered} shouldHideOnScroll={shouldHideOnScroll}>
      <NavbarBrand>
        <Link href="/">
          <Image src={logo} alt="Logo" width={50} />
        </Link>
        <b className="hidden p-3 text-2xl md:inline">{NAVBAR_TEXTS.schedule}</b>
        <Chip color="warning" size="md" className="mx-2">
          Beta
        </Chip>
      </NavbarBrand>
      <NavbarContent justify="end">
        <GroupDropdownMenu />
        <DrawerComp />
      </NavbarContent>
    </Navbar>
  )
}

export default NavbarComponent

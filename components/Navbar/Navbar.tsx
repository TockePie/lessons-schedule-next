'use client'

import { FC } from 'react'
import { isMobile, isMobileOnly } from 'react-device-detect'
import Link from 'next/link'

import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/navbar'
import { Image } from '@nextui-org/image'
import { Button } from '@nextui-org/button'
import { Menu } from 'lucide-react'

import GroupDropdownMenu from './components/DropdownMenu/DropdownMenu'

import { useGroup } from '@/common/providers/group'

const schedule = 'Розклад'

const NavbarComponent: FC = () => {
  const { logo } = useGroup();

  return (
    <Navbar isBordered={isMobile} shouldHideOnScroll={isMobileOnly}>
      <NavbarBrand>
        <Link href="/">
          <Image src={logo} alt="Logo" width={50} />
        </Link>
        {!isMobileOnly && <b className="p-3 text-2xl">{schedule}</b>}
      </NavbarBrand>
      <NavbarContent justify="end">
        <GroupDropdownMenu />
        <Button isIconOnly color="primary" variant="faded">
          <Menu />
        </Button>
      </NavbarContent>
    </Navbar>
  )
}

export default NavbarComponent

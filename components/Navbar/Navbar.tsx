'use client'

import { FC } from 'react'
import { isMobile, isMobileOnly } from 'react-device-detect'
import Link from 'next/link'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Image,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Chip
} from '@nextui-org/react'
import { Menu } from 'lucide-react'

import GroupDropdownMenu from './components/DropdownMenu'

import { useGroup } from '@/common/providers/group'

const schedule = 'Розклад'

const NotWorkingPopover = () => {
  return <PopoverContent>Поки що не працює, але скоро виправимо 😊</PopoverContent>
}

const NavbarComponent: FC = () => {
  const { logo } = useGroup()

  return (
    <Navbar isBordered={isMobile} shouldHideOnScroll={isMobileOnly}>
      <NavbarBrand>
        <Link href="/">
          <Image src={logo} alt="Logo" width={50} />
        </Link>
        {!isMobileOnly && <b className="p-3 text-2xl">{schedule}</b>}
        <Chip color="warning" size="md">Beta</Chip>
      </NavbarBrand>
      <NavbarContent justify="end">
        <GroupDropdownMenu />
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button isIconOnly color="primary" variant="faded">
              <Menu />
            </Button>
          </PopoverTrigger>
          <NotWorkingPopover />
        </Popover>
      </NavbarContent>
    </Navbar>
  )
}

export default NavbarComponent

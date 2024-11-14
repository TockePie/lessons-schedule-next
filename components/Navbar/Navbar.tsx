'use client'

import { isDesktop, isMobile, isMobileOnly } from 'react-device-detect'
import { useDisclosure } from '@dwarvesf/react-hooks'
import Link from 'next/link'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Image,
  Button,
  Chip,
  Kbd
} from '@nextui-org/react'
import { Menu } from 'lucide-react'

import GroupDropdownMenu from './components/DropdownMenu'
import useGroup from '@/common/providers/group'
import { NAVBAR_TEXTS } from '@/common/constants/texts'
import { Sidebar } from '@/components/ui/Sidebar/Sidebar'

const NavbarComponent = () => {
  const { logo } = useGroup()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Navbar isBordered={isMobile} shouldHideOnScroll={isMobileOnly}>
        <NavbarBrand>
          <Link href="/">
            <Image src={logo} alt="Logo" width={50} />
          </Link>
          {!isMobileOnly && (
            <b className="p-3 text-2xl">{NAVBAR_TEXTS.schedule}</b>
          )}
          <Chip color="warning" size="md">
            Beta
          </Chip>
        </NavbarBrand>
        <NavbarContent justify="end">
          <GroupDropdownMenu />
          <Button isIconOnly color="primary" variant="faded" onClick={onOpen}>
            <Menu />
          </Button>
        </NavbarContent>
      </Navbar>
      <Sidebar onClose={onClose} isOpen={isOpen}>
          <h2 className='text-2xl font-bold'>Налаштування</h2>
      </Sidebar>
    </>
  )
}

export default NavbarComponent

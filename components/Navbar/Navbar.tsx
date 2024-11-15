'use client'

import { isMobile, isMobileOnly } from 'react-device-detect'
import { useDisclosure } from '@dwarvesf/react-hooks'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Image,
  Button,
  Chip,
  Divider,
  Card,
  CardBody
} from '@nextui-org/react'
import { Menu } from 'lucide-react'

import GroupDropdownMenu from './components/DropdownMenu'
import useGroup from '@/common/providers/group'
import { NAVBAR_TEXTS } from '@/common/constants/texts'
import { Sidebar } from '@/components/ui/Sidebar/Sidebar'

const Settings = dynamic(() => import('../Settings/Settings'), { ssr: false });

const NavbarComponent = () => {
  const router = useRouter()
  const { logo } = useGroup()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleHelpPress = () => {
    router.push('/help')
    onClose()
  }

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
        <Settings />
        <Divider className="my-4" />
        <Card
          isPressable
          onPress={handleHelpPress}
          className="cursor-pointer w-full h-24"
        >
          <CardBody className="text-center text-xl justify-center">
            Допомога
          </CardBody>
        </Card>
      </Sidebar>
    </>
  )
}

export default NavbarComponent

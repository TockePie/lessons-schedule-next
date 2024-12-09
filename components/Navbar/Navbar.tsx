'use client'

import { useEffect, useState } from 'react'
import { isMobile, isMobileOnly } from 'react-device-detect'
import { useDisclosure } from '@dwarvesf/react-hooks'
import {
  Button,
  Card,
  CardBody,
  Chip,
  Divider,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent
} from '@nextui-org/react'
import { Menu } from 'lucide-react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { NAVBAR_TEXTS } from '@/common/constants/texts'
import useGroup from '@/common/providers/group'
import { Sidebar } from '@/components/ui/Sidebar'

import GroupDropdownMenu from './components/DropdownMenu'

const Settings = dynamic(() => import('../Settings/Settings'), { ssr: false })

const NavbarComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isClient, setIsClient] = useState(false)
  const router = useRouter()
  const { logo } = useGroup()

  const handleHelpPress = () => {
    router.push('/help')
    onClose()
  }

  useEffect(() => setIsClient(true), [])

  const isBordered = isClient ? isMobile : false
  const shouldHideOnScroll = isClient ? isMobileOnly : false

  return (
    <>
      <Navbar isBordered={isBordered} shouldHideOnScroll={shouldHideOnScroll}>
        <NavbarBrand>
          <Link href="/">
            <Image src={logo} alt="Logo" width={50} />
          </Link>
          <b className="hidden p-3 text-2xl md:inline">
            {NAVBAR_TEXTS.schedule}
          </b>
          <Chip color="warning" size="md" className="mx-2">
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
          className="h-24 w-full cursor-pointer"
        >
          <CardBody className="justify-center text-center text-xl">
            Допомога
          </CardBody>
        </Card>
      </Sidebar>
    </>
  )
}

export default NavbarComponent

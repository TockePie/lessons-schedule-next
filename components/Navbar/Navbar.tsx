import { FC } from 'react'
import Link from 'next/link'
import { isMobile } from 'react-device-detect'

import { Navbar, NavbarBrand } from '@nextui-org/navbar'
import { Image } from '@nextui-org/image'

import defaultLogo from './assets/default-logo.png'
import WeekTab from './components/WeekTab/WeekTab'

const schedule = 'Розклад'

const NavbarComponent: FC = () => {
  return (
    <Navbar isBordered={isMobile} shouldHideOnScroll={isMobile}>
      <NavbarBrand>
        <Link href="/">
          <Image src={defaultLogo.src} alt="Logo" width={50} />
        </Link>
        <b className="p-3 text-2xl">{schedule}</b>
        <WeekTab />
      </NavbarBrand>
    </Navbar>
  )
}

export default NavbarComponent

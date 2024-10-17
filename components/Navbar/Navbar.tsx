import Link from 'next/link'
import { isMobile } from 'react-device-detect'

import { Navbar, NavbarBrand } from '@nextui-org/navbar'
import { Image } from '@nextui-org/image'

import defaultLogo from './assets/default-logo.png'

const NavbarComponent = () => {
  return (
    <Navbar isBordered={isMobile} shouldHideOnScroll={isMobile}>
      <NavbarBrand>
        <Link href="/">
          <Image src={defaultLogo.src} alt="NextUI" width={50} />
        </Link>
      </NavbarBrand>
    </Navbar>
  )
}

export default NavbarComponent

'use client'

import { FC, ReactNode, useRef } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { isDesktop } from 'react-device-detect'
import { Button, Kbd } from '@nextui-org/react'

import useOutside from '@/hooks/use-outside'

import styles from './Sidebar.module.scss'

interface SidebarProps {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

const Sidebar: FC<SidebarProps> = ({ children, isOpen, onClose }) => {
  //TODO: Sidebar Options: settingsmodalpage, helppage, aboutpage
  //TODO: SettingPage: change selectives, PWA ZOOM, change theme, card styles

  const sidebarRef = useRef(null)
  useOutside(sidebarRef, onClose)

  useHotkeys('esc', onClose)

  if (!isOpen) return null

  return (
    <div className={styles.sidebar} ref={sidebarRef}>
      <div className={styles.content}>
        <div>{children}</div>
        <Button size="lg" color="primary" variant="faded" onClick={onClose}>
          Закрити
          {isDesktop && <Kbd>Esc</Kbd>}
        </Button>
      </div>
    </div>
  )
}

export { Sidebar }

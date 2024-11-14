'use client'

import { FC, ReactNode } from 'react'

import styles from './Sidebar.module.scss'
import { useHotkeys } from 'react-hotkeys-hook'
import { isDesktop } from 'react-device-detect'
import { Button, Kbd } from '@nextui-org/react'

interface SidebarProps {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

const Sidebar: FC<SidebarProps> = ({ children, isOpen, onClose }) => {
  //TODO: Add sidebar
  //TODO: Sidebar Options: settingsmodalpage, helppage, aboutpage
  //TODO: SettingPage: change selectives, PWA ZOOM, change theme, card styles

  useHotkeys('esc', onClose)

  if (!isOpen) return null

  return (
    <div className={styles.sidebar}>
      <div className={styles.content}>
        {children}
        <Button size="lg" color="primary" variant="faded" onClick={onClose}>
          Закрити
          {isDesktop && <Kbd>Esc</Kbd>}
        </Button>
      </div>
    </div>
  )
}

export { Sidebar }

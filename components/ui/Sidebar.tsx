'use client'

import { FC, ReactNode, useRef } from 'react'
import { isDesktop } from 'react-device-detect'
import { useHotkeys } from 'react-hotkeys-hook'
import { Button, Kbd } from '@nextui-org/react'

import useOutside from '@/hooks/use-outside'

interface SidebarProps {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

const Sidebar: FC<SidebarProps> = ({ children, isOpen, onClose }) => {
  const sidebarRef = useRef(null)
  useOutside(sidebarRef, onClose)

  useHotkeys('esc', onClose)

  if (!isOpen) return null

  return (
    <div
      className="fixed right-0 top-0 z-50 h-full w-11/12 animate-slideIn border-l border-zinc-300 bg-zinc-50 md:w-5/12 lg:w-4/12 xl:w-3/12 2xl:w-96 dark:border-zinc-700 dark:bg-zinc-900"
      ref={sidebarRef}
    >
      <div className="flex h-full flex-col justify-between p-4">
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

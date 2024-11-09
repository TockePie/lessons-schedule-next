'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { isDesktop, isMobileOnly } from 'react-device-detect'

import { useDisclosure } from '@nextui-org/react'

import useWeekParity from '@/common/providers/weekParity'
import { groupDataList } from '@/data/groupData'

import DesktopTable from './components/DesktopTable'
import MobileTable from './components/MobileTable'

interface LessonUrl {
  url: string
  password?: string
  needDialog?: boolean
  textInDialog?: string
}

const TableComponent = () => {
  const [modalData, setModalData] = useState<{
    textInDialog: string
    password: string
    url: string | LessonUrl | (() => void)
  }>({
    textInDialog: '',
    password: '',
    url: ''
  })
  const { isOpen, onOpen, onClose } = useDisclosure()

  const pathname = usePathname().split('/')[1]

  const { weekParity } = useWeekParity()

  const getLessonsData = () => {
    return (
      groupDataList.find((group) => group.data.id === pathname)?.data.lessons[
        weekParity === 'even' ? 'evenLessons' : 'oddLessons'
      ] || {}
    )
  }

  if (isDesktop) {
    return (
      <DesktopTable
        modalData={modalData}
        setModalData={setModalData}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        lessonsData={getLessonsData()}
        pathname={pathname}
      />
    )
  }

  if (isMobileOnly) {
    return <MobileTable />
  }
}

export default TableComponent

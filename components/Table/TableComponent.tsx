'use client'

import { useState, useContext } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { isDesktop, isMobileOnly } from 'react-device-detect'

import { useDisclosure } from '@nextui-org/react'

import { WeekParityContext } from '@/common/providers/weekParity'
import { groupDataList } from '@/data/groupData'

import DesktopTable from './components/DesktopTable'
import MobileTable from './components/MobileTable'

const TableComponent = () => {
  const [modalData, setModalData] = useState({
    textInDialog: '',
    password: '',
    url: ''
  })
  const { isOpen, onOpen, onClose } = useDisclosure()

  const router = useRouter()
  const pathname = usePathname().split('/')[1]

  const weekParityContext = useContext(WeekParityContext)
  if (!weekParityContext) throw new Error('WeekParityContext is not provided')
  const { weekParity } = weekParityContext

  const getLessonsData = () => {
    return groupDataList.find((group) => group.data.id === pathname)?.data.lessons[
      weekParity === 'even' ? 'evenLessons' : 'oddLessons'
    ] || {}
  }

  if (isDesktop) {
    return <DesktopTable 
      modalData={modalData}
      setModalData={setModalData}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      lessonsData={getLessonsData()}
      router={router}
      pathname={pathname}
     />
  }

  if (isMobileOnly) {
    return <MobileTable />
  }
}

export default TableComponent

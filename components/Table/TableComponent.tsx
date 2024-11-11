'use client'

import { useState } from 'react'
import { redirect, usePathname } from 'next/navigation'
import { isDesktop, isMobileOnly } from 'react-device-detect'
import { Button, Divider, useDisclosure } from '@nextui-org/react'

import useWeekParity from '@/common/providers/weekParity'
import { TABLE_TEXTS } from '@/common/constants/texts'
import { ModalData } from '@/types/table'
import { groupDataList } from '@/data/groupData'

import DesktopTable from './components/DesktopTable'
import MobileTable from './components/MobileTable'
import styles from './Table.module.scss'

const TableComponent = () => {
  const [modalData, setModalData] = useState<ModalData>({
    textInDialog: '',
    password: '',
    url: ''
  })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { weekParity } = useWeekParity()

  const pathname = usePathname().split('/')[1]

  const getLessonsData = () => {
    return (
      groupDataList.find((group) => group.data.id === pathname)?.data.lessons[
        weekParity === 'even' ? 'evenLessons' : 'oddLessons'
      ] || {}
    )
  }

  const EmptyContent = () => (
    <div className={styles.emptyContent}>
      <b>{TABLE_TEXTS.emptyLesson}</b>
      <Divider className="lg:w-1/2" />
      <div className={styles.helpBox}>
        <p>{TABLE_TEXTS.helpMessage}</p>
        <Button
          color="default"
          variant="flat"
          onClick={async () => redirect('/help')}
        >
          {TABLE_TEXTS.help}
        </Button>
      </div>
    </div>
  )

  if (isDesktop) {
    return (
      <DesktopTable
        modalData={modalData}
        emptyContent={<EmptyContent />}
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
    return (
      <MobileTable
        modalData={modalData}
        emptyContent={<EmptyContent />}
        setModalData={setModalData}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        lessonsData={getLessonsData()}
        pathname={pathname}
      />
    )
  }
}

export default TableComponent

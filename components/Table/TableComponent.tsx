'use client'

import { useState } from 'react'
import { redirect, usePathname } from 'next/navigation'
import { isDesktop, isMobileOnly } from 'react-device-detect'

import { Button, Divider, useDisclosure } from '@nextui-org/react'

import useWeekParity from '@/common/providers/weekParity'
import { groupDataList } from '@/data/groupData'

import DesktopTable from './components/DesktopTable'
import MobileTable from './components/MobileTable'

const emptyLesson = 'Розклад відсутній. Оберіть групу, щоб побачити заняття.'
const helpMessage = 'Вперше на сайті? Ознайомтесь із функціоналом!'
const help = 'Допомога'

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
    <div className="flex flex-col justify-center items-center gap-y-5 h-64">
      <b>{emptyLesson}</b>
      <Divider className="lg:w-1/2" />
      <div className="flex flex-col gap-4 items-center">
        <p>{helpMessage}</p>
        <Button
          color="default"
          variant="flat"
          onClick={async () => redirect('/help')}
        >
          {help}
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

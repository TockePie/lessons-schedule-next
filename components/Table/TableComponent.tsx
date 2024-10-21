'use client'

import { FC, useContext, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell
} from '@nextui-org/table'
import { Button } from '@nextui-org/button'
import { Card, CardBody } from '@nextui-org/card'
import { useDisclosure } from '@nextui-org/react'

import ModalDialog from './components/ModalDialog'
import { WeekParityContext } from '@/common/providers/weekParity'
import { groupDataList } from '@/data/groupData'
import { allDays, getCurrentDay } from './utils/daysFunctions'
import getLessonColor, { LessonType } from './utils/getLessonColor'
import rowIndices, { TimeRange } from './common/constants'
import styles from './Table.module.scss'
import handlePress from './utils/handlePressCard'

const lessons = 'Пари'
const emptyLesson = 'Розклад відсутній. Оберіть групу, щоб побачити заняття.'
const helpMessage = 'Вперше на сайті? Ознайомтесь із функціоналом!'

interface LessonUrl {
  url: string
  password?: string
  needDialog?: boolean
  textInDialog?: string
}

interface Lesson {
  lessonName: string | null
  lessonType: LessonType | null // Assuming LessonType is defined as 'lecture' | 'practice' | 'lab' | null
  teacher: string | null
  url: string | (() => void) | LessonUrl | null // Supports string, function, or an object with URL details
  dayOfWeek: string
}

interface LessonsData {
  [key: string]: Lesson[] // This allows string indexing for the rows (firstLessonsRow, secondLessonsRow, etc.)
}

const TableComponent: FC = () => {
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

  const lessonsData: LessonsData =
    groupDataList.find((group) => group.data.id === pathname)?.data.lessons[
      weekParity === 'even' ? 'evenLessons' : 'oddLessons'
    ] || {}

  return (
    <>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn key="lessons" className="max-w-10">
            <div className="flex justify-center text-sm">{lessons}</div>
          </TableColumn>
          <>
            {allDays.map((day) => {
              const currentDay = getCurrentDay()
              const isCurrentDay =
                currentDay && currentDay[0] !== 'sun'
                  ? day.key === currentDay[0]
                  : false

              return (
                <TableColumn
                  key={day.key}
                  className={`${
                    isCurrentDay ? 'bg-yellow-200 text-slate-950' : ''
                  }`}
                >
                  <div className="flex justify-center">{day.label}</div>
                </TableColumn>
              )
            })}
          </>
        </TableHeader>
        <TableBody
          emptyContent={
            <div className="flex flex-col justify-center gap-y-5">
              <b>{emptyLesson}</b>
              <div className="flex flex-col gap-2 items-center">
                <p>{helpMessage}</p>
                <Button
                  color="default"
                  variant="flat"
                  onClick={() => router.push('/help')}
                >
                  Допомога
                </Button>
              </div>
            </div>
          }
        >
          {rowIndices
            .map(([rowName, time]: [string, TimeRange], i: number) => {
              if (!lessonsData[rowName]) return null

              return (
                <TableRow key={i}>
                  <TableCell className="min-w-16">
                    <Card
                      aria-label="Time Card"
                      className={`noselect ${styles.time}`}
                    >
                      <CardBody>
                        <CardBody className="flex items-center justify-between px-2">
                          <p>{time.start}</p>
                          <b className="text-large">{i + 1} пара</b>
                          <p>{time.end}</p>
                        </CardBody>
                      </CardBody>
                    </Card>
                  </TableCell>
                  {lessonsData[rowName]?.map((lesson, j) => (
                    <TableCell
                      key={`${rowName}-${j}`}
                      className="min-w-48 max-w-48"
                    >
                      {lesson.lessonType != null && (
                        <Card
                          aria-label="Lesson Card"
                          className={`noselect ${
                            lesson.lessonType
                              ? getLessonColor(lesson.lessonType)
                              : ''
                          } ${styles.lessons}`}
                          isPressable
                          onPress={() =>
                            handlePress(lesson, setModalData, onOpen)
                          }
                        >
                          <CardBody className={styles.body}>
                            <b>{lesson.lessonName}</b>
                            <a>{lesson.teacher}</a>
                          </CardBody>
                        </Card>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              )
            })
            .filter((row) => row !== null)}
        </TableBody>
      </Table>
      <ModalDialog isOpen={isOpen} onClose={onClose} data={modalData} />
    </>
  )
}

export default TableComponent

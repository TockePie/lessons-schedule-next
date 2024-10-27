// @ts-nocheck
'use client'

import { FC } from 'react'
import { useRouter } from 'next/navigation'

import {
  Button,
  Card,
  CardBody,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell
} from '@nextui-org/react'

import ModalDialog from './ModalDialog'
import { allDays, getCurrentDay } from '../utils/daysFunctions'
import getLessonColor, { LessonType } from '../utils/getLessonColor'
import handlePress from '../utils/handlePressCard'
import rowIndices, { TimeRange } from '../common/constants'
import styles from '../Table.module.scss'

const lessons = 'Пари'
const emptyLesson = 'Розклад відсутній. Оберіть групу, щоб побачити заняття.'
const helpMessage = 'Вперше на сайті? Ознайомтесь із функціоналом!'
const help = 'Допомога'

interface LessonUrl {
  url: string
  password?: string
  needDialog?: boolean
  textInDialog?: string
}

interface Lesson {
  lessonName: string | null
  lessonType: LessonType | null
  teacher: string | null
  url: string | (() => void) | LessonUrl | null
  dayOfWeek: string
}

interface LessonsData {
  [key: string]: Lesson[]
}

interface TableComponentProps {
  modalData: any
  setModalData: (data: any) => void
  onOpen: () => void
  lessonsData: LessonsData
  router: ReturnType<typeof useRouter>
  isOpen: boolean
  onClose: () => void
}

const TableComponent: FC<TableComponentProps> = (props) => {
  const HeaderDays = allDays.map((day) => {
    const currentDay = getCurrentDay()
    const isCurrentDay =
      currentDay && currentDay[0] !== 'sun' ? day.key === currentDay[0] : false

    return (
      <TableColumn
        key={day.key}
        className={`${isCurrentDay ? 'bg-yellow-200 text-slate-950' : ''}`}
      >
        <div className="flex justify-center">{day.label}</div>
      </TableColumn>
    )
  })

  const EmptyContent = () => (
    <div className="flex flex-col justify-center gap-y-5">
      <b>{emptyLesson}</b>
      <div className="flex flex-col gap-2 items-center">
        <p>{helpMessage}</p>
        <Button
          color="default"
          variant="flat"
          onClick={() => props.router.push('/help')}
        >
          {help}
        </Button>
      </div>
    </div>
  )

  return (
    <>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn key="lessons" className="max-w-10">
            <div className="flex justify-center text-sm">{lessons}</div>
          </TableColumn>
          <>{HeaderDays}</>
        </TableHeader>
        <TableBody emptyContent={<EmptyContent />}>
          {rowIndices
            .map(([rowName, time]: [string, TimeRange], i: number) => {
              if (!props.lessonsData[rowName]) return null

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
                  {props.lessonsData[rowName]?.map((lesson, j) => (
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
                            handlePress(
                              lesson,
                              props.setModalData,
                              props.onOpen
                            )
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
      <ModalDialog
        isOpen={props.isOpen}
        onClose={props.onClose}
        data={props.modalData}
      />
    </>
  )
}

export default TableComponent
'use client'

import { FC, Key, useContext } from 'react'
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

import { WeekParityContext } from '@/common/providers/weekParity'
import { groupDataList } from '@/data/groupData'
import { allDays, getCurrentDay } from './utils/daysFunctions'
import getLessonColor, { LessonType } from './utils/getLessonColor'
import rowIndices, { TimeRange } from './common/constants'
import styles from './Table.module.scss'

const lessons = 'Пари'
const emptyLesson = 'Розклад відсутній. Оберіть групу, щоб побачити заняття.'
const helpMessage = 'Вперше на сайті? Ознайомтесь із функціоналом!'

interface LessonProps {}

const TableComponent: FC = () => {
  const router = useRouter()
  const pathname = usePathname().split('/')[1]

  const weekParityContext = useContext(WeekParityContext)
  if (!weekParityContext) throw new Error('WeekParityContext is not provided')
  const { weekParity } = weekParityContext

  const lessonsData = groupDataList.find((group) => group.data.id === pathname)
    ?.data.lessons[weekParity === 'even' ? 'evenLessons' : 'oddLessons']

  function handlePressCallback(lesson: any) {
    console.error('Lesson pressed:', lesson)
  }

  return (
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
        {rowIndices.map(([rowName, time]: [string, TimeRange], i: number) => {
          if (lessonsData[rowName] === undefined) return

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
              {lessonsData[rowName].map(
              (
                lesson: {
                  lessonType: LessonType | null
                  lessonName: string
                  teacher: string
                },
                j: Key | null | undefined
              ) => (
                <TableCell key={j} className="min-w-48 max-w-48">
                  {lesson.lessonType != null && (
                    <Card
                      aria-label="Lesson Card"
                      className={`noselect ${getLessonColor(
                        lesson.lessonType
                      )} ${styles.lessons}`}
                      isPressable
                      onPress={() => handlePressCallback(lesson)}
                    >
                      <CardBody className={styles.body}>
                        <b>{lesson.lessonName}</b>
                        <a>{lesson.teacher}</a>
                      </CardBody>
                    </Card>
                  )}
                </TableCell>
              )
            )}
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

export default TableComponent

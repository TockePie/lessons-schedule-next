// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client'

import { FC } from 'react'
import {
  Card,
  CardBody,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip
} from '@nextui-org/react'

import { TableComponentProps } from '@/components/Table/types/table'
import ModalDialog from './ModalDialog'
import { allDays, getCurrentDay } from '../utils/daysFunctions'
import getLessonColor from '../utils/getLessonColor'
import handlePress from '../utils/handlePressCard'
import rowIndices, { TimeRange } from '../common/constants'
import styles from '../Table.module.scss'
import { TABLE_TEXTS } from '@/common/constants/texts'

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

  const RenderCard = (lesson) => {
    const lessonType = lesson.lessonType
    const lessonsUa = {
      lecture: 'Лекція',
      practice: 'Практика',
      lab: 'Лабораторна'
    }
    const lessonColor = {
      lecture: 'primary',
      practice: 'danger',
      lab: 'warning'
    }

    if (lesson.lessonType != null) {
      if (localStorage.getItem('lessonTypeStyle') === 'border') {
        return (
          <Card
            aria-label="Lesson Card"
            className={`noselect h-36 ${styles.lessons} ${getLessonColor(
              lessonType
            )}`}
            isPressable
            onPress={() =>
              handlePress(lesson, props.setModalData, props.onOpen)
            }
          >
            <CardBody className={styles.body}>
              <b>{lesson.lessonName}</b>
              <a>{lesson.teacher}</a>
            </CardBody>
          </Card>
        )
      } else {
        return (
          <Card
            aria-label="Lesson Card"
            className={`noselect h-36 ${styles.lessons}`}
            isPressable
            onPress={() =>
              handlePress(lesson, props.setModalData, props.onOpen)
            }
          >
            <CardBody className={styles.body}>
              <Chip
                variant="flat"
                size="sm"
                radius="sm"
                color={lessonColor[lessonType]}
              >
                {lessonsUa[lessonType]}
              </Chip>
              <b>{lesson.lessonName}</b>
              <a>{lesson.teacher}</a>
            </CardBody>
          </Card>
        )
      }
    }

    return null
  }

  return (
    <>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn key="lessons" className={styles.tableColumn}>
            <div>{TABLE_TEXTS.lessons}</div>
          </TableColumn>
          <>{HeaderDays}</>
        </TableHeader>
        <TableBody emptyContent={props.emptyContent}>
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
                      <RenderCard {...lesson} />
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

import { FC, Fragment, Key, useState } from 'react'
import {
  Card,
  CardBody,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tabs
} from '@nextui-org/react'

import { TableComponentProps } from '@/types/table'
import ModalDialog from './ModalDialog'
import getLessonColor from '../utils/getLessonColor'
import { allDays, getCurrentDay } from '../utils/daysFunctions'
import handlePress from '../utils/handlePressCard'
import rowIndices, { TimeRange } from '../common/constants'
import styles from '../Table.module.scss'

const MobileTable: FC<TableComponentProps> = (props) => {
  const [selectedDay, setSelectedDay] = useState(
    getCurrentDay()?.[0] || allDays[0].key
  )

  const trimmedRowIndices = rowIndices.filter(
    ([rowName]) => rowName in props.lessonsData
  )

  const handleDayChange = (dayKey: string) => {
    setSelectedDay(dayKey)
  }

  return (
    <div className={styles.mobileTable}>
      <Tabs
        aria-label="Days of the week"
        selectedKey={selectedDay}
        onSelectionChange={(key: Key) => handleDayChange(key as string)}
      >
        {allDays.map((day) => (
          <Tab key={day.key} title={day.short} />
        ))}
      </Tabs>

      <Table aria-label="Lessons Table">
        <TableHeader>
          <TableColumn key="lessons">
            <div className="flex justify-center">Пари</div>
          </TableColumn>
          <TableColumn>
            <div className="flex justify-center">
              {allDays.find((d) => d.key === selectedDay)?.label}
            </div>
          </TableColumn>
        </TableHeader>
        <TableBody emptyContent={props.emptyContent}>
          {trimmedRowIndices.map(
            ([rowName, time]: [string, TimeRange], i: number) => {
              const lessonRow =
                props.lessonsData[rowName]?.filter(
                  (lesson) => lesson.dayOfWeek === selectedDay
                ) || []

              return (
                <TableRow key={i}>
                  <TableCell className="min-w-16 h-[17vh]">
                    <Card
                      aria-label="Time Card"
                      className={`text-nowrap noselect h-full`}
                    >
                      <CardBody>
                        <CardBody className="flex items-center justify-between px-2 overflow-y-hidden">
                          <p>{time.start}</p>
                          <b className="text-large">{i + 1} пара</b>
                          <p>{time.end}</p>
                        </CardBody>
                      </CardBody>
                    </Card>
                  </TableCell>
                  <TableCell className="min-w-44 max-w-64">
                    {lessonRow.map((lesson, idx) => (
                      <Fragment key={`lesson-${idx}`}>
                        {lesson.lessonType != null && (
                          <Card
                            aria-label="Lesson Card"
                            className={`noselect h-full ${
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
                      </Fragment>
                    ))}
                  </TableCell>
                </TableRow>
              )
            }
          )}
        </TableBody>
      </Table>
      <ModalDialog
        isOpen={props.isOpen}
        onClose={props.onClose}
        data={props.modalData}
      />
    </div>
  )
}

export default MobileTable

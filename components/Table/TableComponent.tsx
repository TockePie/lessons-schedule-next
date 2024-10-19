'use client'

import { FC } from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell
} from '@nextui-org/table'

import { allDays, getCurrentDay } from './utils/daysFunctions'
import Link from 'next/link'
import { Button } from '@nextui-org/button'
import { useRouter } from 'next/navigation'

const lessons = 'Пари'

const TableComponent: FC = () => {
  const router = useRouter()

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
            <b>Розклад відсутній. Оберіть групу, щоб побачити заняття.</b>
            <div className="flex flex-col gap-2 items-center">
              <p>Вперше на сайті? Ознайомтесь із функціоналом!</p>
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
      ></TableBody>
    </Table>
  )
}

export default TableComponent

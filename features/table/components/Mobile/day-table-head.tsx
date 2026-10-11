'use client'

import { useContext } from 'react'
import { TableHead } from '@ui/table'

import { DAYS_OF_WEEK } from '../../constants/days-of-week'
import { SelectedDayContext } from './day-tabs'

export default function DayTableHead() {
  const selectedDay = useContext(SelectedDayContext)
  const dayName =
    selectedDay === 7 ? 'Неділя' : DAYS_OF_WEEK[selectedDay!].nameUk

  return <TableHead className="text-center">{dayName}</TableHead>
}

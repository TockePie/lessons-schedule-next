'use client'

import { useContext } from 'react'
import { TableHead } from '@ui/table'

import { DAY_OF_WEEK } from '@/common/constants/day-of-the-week'

import { DayContext } from './day-tabs'

export default function DayTableHead() {
  const manualDay = useContext(DayContext)

  const dayName = manualDay === 7 ? 'Неділя' : DAY_OF_WEEK[manualDay!].name

  return <TableHead className="text-center">{dayName}</TableHead>
}

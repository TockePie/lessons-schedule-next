import React from 'react'
import { Table } from '@ui/table'

import useWeekParity from '@/common/context/week-parity'

const Table = () => {
  const { weekParity } = useWeekParity()

  return <Table></Table>
}

export default Table

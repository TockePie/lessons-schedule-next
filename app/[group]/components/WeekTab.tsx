'use client'

import { FC, Key, useContext } from 'react'

import { Tabs, Tab } from '@nextui-org/react'

import { WeekParityContext } from '@/common/providers/weekParity'

const evenText = 'Парний тиждень'
const oddText = 'Непарний тиждень'

const WeekTab: FC = () => {
  const weekParityContext = useContext(WeekParityContext)
  if (!weekParityContext) throw new Error('WeekParityContext is not provided')
  const { weekParity, setWeekParity } = weekParityContext

  return (
    <Tabs
      aria-label="even-odd-selector"
      onSelectionChange={(key: Key) => setWeekParity(key as 'even' | 'odd')}
      selectedKey={weekParity}
    >
      <Tab key="even" title={evenText} />
      <Tab key="odd" title={oddText} />
    </Tabs>
  )
}

export default WeekTab

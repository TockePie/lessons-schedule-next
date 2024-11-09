'use client'

import { Key } from 'react'

import { Tabs, Tab } from '@nextui-org/react'

import useWeekParity from '@/common/providers/weekParity'
import { WEEKTAB_TEXTS } from '@/common/constants/texts'

const WeekTab = () => {
  const { weekParity, setWeekParity } = useWeekParity()

  return (
    <Tabs
      aria-label="even-odd-selector"
      onSelectionChange={(key: Key) => setWeekParity(key as 'even' | 'odd')}
      selectedKey={weekParity}
    >
      <Tab key="even" title={WEEKTAB_TEXTS.evenText} />
      <Tab key="odd" title={WEEKTAB_TEXTS.oddText} />
    </Tabs>
  )
}

export default WeekTab

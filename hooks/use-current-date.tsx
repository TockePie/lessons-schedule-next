'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  addMinutes,
  differenceInMilliseconds,
  getISODay,
  startOfMinute
} from 'date-fns'

import { CurrentDay } from '@/types/current-date'

export function useCurrentDate() {
  const [currentDate, setCurrentDate] = useState(() => new Date())

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    ;(function tick() {
      const now = new Date()
      setCurrentDate(now)

      const nextMinute = startOfMinute(addMinutes(now, 1))
      const msUntilNextMinute = differenceInMilliseconds(nextMinute, now)

      timeoutId = setTimeout(tick, msUntilNextMinute)
    })()

    return () => clearTimeout(timeoutId)
  }, [])

  return useMemo(() => {
    const currentDay = getISODay(currentDate) as CurrentDay
    const minutesSinceMidnight =
      currentDate.getHours() * 60 + currentDate.getMinutes()

    return {
      currentDate,
      currentDay,
      minutesSinceMidnight
    }
  }, [currentDate])
}

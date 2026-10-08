'use client'

import { useEffect, useState } from 'react'
import { addMinutes, differenceInMilliseconds, startOfMinute } from 'date-fns'

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

  return currentDate
}

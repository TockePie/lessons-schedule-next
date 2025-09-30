type CurrentDay = 1 | 2 | 3 | 4 | 5 | 6 | 7

interface CurrentDateContextValue {
  currentDate: Date
  currentDay: CurrentDay
  minutesSinceMidnight: number
}

export { type CurrentDateContextValue, type CurrentDay }

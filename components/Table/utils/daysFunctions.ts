interface DaysProps {
  key: string
  label: string
}

const allDays: DaysProps[] = [
  { key: 'mon', label: 'Понеділок' },
  { key: 'tue', label: 'Вівторок' },
  { key: 'wed', label: 'Середа' },
  { key: 'thu', label: 'Четвер' },
  { key: 'fri', label: "П'ятниця" },
  { key: 'sat', label: 'Субота' }
]

const getCurrentDay = (): [string, string] | undefined => {
  const dayIndex = new Date().getDay()
  const dayMap: { [key: number]: string } = {
    0: 'sun',
    1: 'mon',
    2: 'tue',
    3: 'wed',
    4: 'thu',
    5: 'fri',
    6: 'sat'
  }

  const dayKey = dayMap[dayIndex]
  const currentDay = allDays.find((day) => day.key === dayKey)

  return currentDay ? [currentDay.key, currentDay.label] : undefined
}

export { allDays, getCurrentDay }

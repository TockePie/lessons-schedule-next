interface DaysProps {
  key: string
  label: string
  short: string
}

const allDays: DaysProps[] = [
  { key: 'mon', label: 'Понеділок', short: 'ПН' },
  { key: 'tue', label: 'Вівторок', short: 'ВТ' },
  { key: 'wed', label: 'Середа', short: 'СР' },
  { key: 'thu', label: 'Четвер', short: 'ЧТ' },
  { key: 'fri', label: "П'ятниця", short: 'ПТ' },
  { key: 'sat', label: 'Субота', short: 'СБ' },
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

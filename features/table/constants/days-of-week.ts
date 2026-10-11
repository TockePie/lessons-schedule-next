export interface DayConfig {
  id: number
  shortEn: string
  shortUk: string
  nameUk: string
}

export const DAYS_OF_WEEK: readonly DayConfig[] = [
  { id: 0, shortEn: 'sun', shortUk: 'нд', nameUk: 'Неділя' },
  { id: 1, shortEn: 'mon', shortUk: 'пн', nameUk: 'Понеділок' },
  { id: 2, shortEn: 'tue', shortUk: 'вт', nameUk: 'Вівторок' },
  { id: 3, shortEn: 'wed', shortUk: 'ср', nameUk: 'Середа' },
  { id: 4, shortEn: 'thu', shortUk: 'чт', nameUk: 'Четвер' },
  { id: 5, shortEn: 'fri', shortUk: 'пт', nameUk: "П'ятниця" },
  { id: 6, shortEn: 'sat', shortUk: 'сб', nameUk: 'Субота' }
] as const

export const STUDY_DAYS = DAYS_OF_WEEK.filter((day) => day.id !== 0)

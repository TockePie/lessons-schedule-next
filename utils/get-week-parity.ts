import { getISOWeek } from 'date-fns'

const getWeekParity = () => {
  const currentDate = new Date()
  const currentWeek = getISOWeek(currentDate)

  const weekParity = currentWeek % 2 === 0 ? 'even' : 'odd'

  return weekParity
}

export default getWeekParity

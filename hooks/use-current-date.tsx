import { useEffect, useState } from 'react'

const useCurrentDate = () => {
  const [currentDate, setcurrentDate] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(
      () => {
        setcurrentDate(new Date())
      },
      2 * 60 * 1000
    ) // update every 2 minutes

    return () => clearInterval(interval)
  }, [])

  return currentDate
}

export default useCurrentDate

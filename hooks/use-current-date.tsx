import { useEffect, useState } from 'react'

const useCurrentDate = () => {
  const [currentDate, setcurrentDate] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentDate(new Date())
    }, 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  return currentDate
}

export default useCurrentDate

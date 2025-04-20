import { useEffect, useState } from 'react'

const getWindowDimensions = (): {
  width: number
  height: number
} => {
  if (typeof window === 'undefined') {
    return { width: 0, height: 0 }
  }

  const { innerWidth: width, innerHeight: height } = window

  return {
    width,
    height
  }
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleResize = () => {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

export default useWindowDimensions

'use client'

import { useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeSetter = () => {
  const { setTheme } = useTheme()
  const theme = window.matchMedia('(prefers-color-scheme: dark)')

  useEffect(() => {
    const systemTheme = theme.matches ? 'dark' : 'light'
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(systemTheme)

    setTheme(systemTheme)
  }, [theme])

  return null
}

export default ThemeSetter

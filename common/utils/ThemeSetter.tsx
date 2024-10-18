'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeSetter = () => {
  const { setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!mounted) return

    const theme = window.matchMedia('(prefers-color-scheme: dark)')

    const systemTheme = theme.matches ? 'dark' : 'light'
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(systemTheme)

    setTheme(systemTheme)
  }, [mounted])

  return null
}

export default ThemeSetter

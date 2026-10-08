'use client'

import { createContext, useContext } from 'react'

import { useCurrentDate } from './hooks/use-current-date'

const CurrentDateContext = createContext<
  ReturnType<typeof useCurrentDate> | undefined
>(undefined)

export function CurrentDateProvider({
  children
}: {
  children: React.ReactNode
}) {
  const currentDate = useCurrentDate()

  return (
    <CurrentDateContext.Provider value={currentDate}>
      {children}
    </CurrentDateContext.Provider>
  )
}

export function useCurrentDateContext() {
  const context = useContext(CurrentDateContext)

  if (context === undefined) {
    throw new Error(
      'useCurrentDateContext must be used within a CurrentDateProvider'
    )
  }

  return context
}

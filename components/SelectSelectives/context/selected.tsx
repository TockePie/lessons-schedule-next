'use client'

import { createContext, PropsWithChildren, useContext, useState } from 'react'

interface Props extends PropsWithChildren {
  initial: string[]
}

const SelectivesContext = createContext<{
  selected: string[]
  toggle: (selected: string) => void
  clear: () => void
} | null>(null)

export function SelectedProvider({ initial, children }: Props) {
  const [selected, setSelected] = useState<string[]>(initial)

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const clear = () => {
    setSelected([])
  }

  return (
    <SelectivesContext.Provider value={{ selected, toggle, clear }}>
      {children}
    </SelectivesContext.Provider>
  )
}

export default function useSelectives() {
  const context = useContext(SelectivesContext)
  if (!context) {
    throw new Error('useSelectives must be used within SelectivesProvider')
  }
  return context
}

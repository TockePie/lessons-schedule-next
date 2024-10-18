'use client'

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from 'react'
import { groupDataList } from '@/data/groupData'

import defaultLogo from '@/components/Navbar/assets/default-logo.png'

interface GroupContextProps {
  group: string | null
  logo: string
  setGroup: (group: string | null) => void
}

const GroupContext = createContext<GroupContextProps | undefined>(undefined)

interface GroupProviderProps {
  children: ReactNode
}

const GroupProvider: React.FC<GroupProviderProps> = ({ children }) => {
  const [group, setGroup] = useState<string | null>(
    localStorage.getItem('group')
  )
  const [logo, setLogo] = useState<string>(defaultLogo.src)

  useEffect(() => {
    const groupData = groupDataList.find((e) => e.group === group)
    setLogo(groupData ? groupData.logo.src : defaultLogo.src)
  }, [group])

  return (
    <GroupContext.Provider value={{ group, logo, setGroup }}>
      {children}
    </GroupContext.Provider>
  )
}

const useGroup = (): GroupContextProps => {
  const context = useContext(GroupContext)
  if (!context) {
    throw new Error('useGroup must be used within a GroupProvider')
  }
  return context
}

export { GroupProvider, useGroup}

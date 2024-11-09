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
  groupId: string | null
  logo: string
  setGroupId: (group: string | null) => void
}

interface GroupProviderProps {
  children: ReactNode
  initialGroupId: string | null
}

const GroupContext = createContext<GroupContextProps | undefined>(undefined)

const GroupProvider: React.FC<GroupProviderProps> = ({
  children,
  initialGroupId
}) => {
  const [groupId, setGroupId] = useState<string | null>(initialGroupId)
  const [group, setGroup] = useState<string | null>(
    groupDataList.find((e) => e.data.id === groupId)?.group || null
  )
  const [logo, setLogo] = useState<string>(defaultLogo.src)

  useEffect(() => {
    const groupData = groupDataList.find((e) => e.data.id === groupId)
    setLogo(groupData ? groupData.logo.src : defaultLogo.src)
    setGroup(groupData ? groupData.group : null)

    if (groupId) {
      document.cookie = `groupId=${groupId}; path=/; max-age=13113600` // Cookie for 5 months
    }
  }, [groupId])

  return (
    <GroupContext.Provider value={{ group, groupId, logo, setGroupId }}>
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

export { GroupProvider, useGroup }

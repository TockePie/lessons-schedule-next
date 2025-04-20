import normalizeUrl from 'normalize-url'

import { GroupProps } from '@/types/group'
import { GroupsListProps } from '@/types/group-list'
import { ScheduleProps } from '@/types/schedule'

let url: string
const env = process.env.NODE_ENV

if (env == 'development') {
  url = normalizeUrl('http://localhost:4000')
} else if (env == 'production') {
  url = normalizeUrl('https://lessons-schedule-api.vercel.app')
}

const getGroupsList = async (): Promise<GroupsListProps[]> => {
  try {
    const res = await fetch(`${url}/group`)

    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`)
    }

    return (await res.json()) as GroupsListProps[]
  } catch (error) {
    throw new Error(`Failed to fetch groups: ${(error as Error).message}`)
  }
}

const getGroupById = async (id: string): Promise<GroupProps> => {
  try {
    const res = await fetch(`${url}/group/${id}`, {
      cache: 'force-cache'
    })

    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`)
    }

    return (await res.json()) as GroupProps
  } catch (error) {
    throw new Error(`Failed to fetch group: ${(error as Error).message}`)
  }
}

const getGroupSchedule = async (id: string, week: 'even' | 'odd') => {
  try {
    const res = await fetch(`${url}/schedule/${id}?week=${week}`, {
      cache: 'force-cache'
    })

    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`)
    }

    return (await res.json()) as ScheduleProps[]
  } catch (error) {
    throw new Error(`Failed to fetch schedule: ${(error as Error).message}`)
  }
}

export { getGroupById, getGroupSchedule, getGroupsList }

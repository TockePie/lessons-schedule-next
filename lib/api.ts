import normalizeUrl from 'normalize-url'

import { GroupProps } from '@/types/group'
import { GroupsListProps } from '@/types/group-list'
import { InternalServerErrorProps } from '@/types/internal-error'
import { ScheduleProps } from '@/types/schedule'

let url: string
const env = process.env.NODE_ENV

if (env == 'development') {
  url = normalizeUrl('http://localhost:4000')
} else if (env == 'production') {
  url = normalizeUrl('https://lessons-schedule-api.vercel.app')
}

const getGroupsList = async (): Promise<
  GroupsListProps[] | InternalServerErrorProps
> => {
  try {
    const res = await fetch(`${url}/group`)
    const data = await res.json()

    return data as GroupsListProps[]
  } catch (error) {
    return {
      error: {
        status: 500,
        message: (error as any).message
      }
    }
  }
}

const getGroupById = async (
  id: string
): Promise<GroupProps | InternalServerErrorProps> => {
  try {
    const res = await fetch(`${url}/group/${id}`, {
      cache: 'force-cache'
    })
    const data = await res.json()

    return data as GroupProps
  } catch (error) {
    return {
      error: {
        status: 500,
        message: (error as any).message
      }
    }
  }
}

const getGroupSchedule = async (id: string, week: 'even' | 'odd') => {
  try {
    const res = await fetch(`${url}/schedule/${id}?week=${week}`, {
      cache: 'force-cache'
    })
    const data = await res.json()

    return data as ScheduleProps[]
  } catch (error) {
    return {
      error: {
        status: 500,
        message: (error as any).message
      }
    }
  }
}

export { getGroupById, getGroupSchedule, getGroupsList }

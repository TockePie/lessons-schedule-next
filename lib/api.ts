import { UUID } from 'crypto'
import { URL } from 'url'

import { GroupProps } from '@/types/group'

let url: URL
const env = process.env.NODE_ENV

if (env == 'development') {
  url = new URL('http://localhost:4000')
} else if (env == 'production') {
  url = new URL('https://lessons-schedule-api.vercel.app')
}

export const getGroupsList = async () => {
  try {
    const res = await fetch(`${url}group`)
    const data = await res.json()

    return data as GroupProps[]
  } catch (error) {
    return {
      error: {
        status: 500,
        message: (error as any).message
      }
    }
  }
}

export const getGroupById = async (id: UUID) => {
  try {
    const res = await fetch(`${url}group/${id}`)
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

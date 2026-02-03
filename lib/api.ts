import z, { ZodType } from 'zod'

import { GroupEntity } from '@/types/entities/group'
import { ScheduleEntity } from '@/types/entities/schedule'
import { GroupsList } from '@/types/groups-list'

const URL = process.env.NEXT_PUBLIC_API_URL
if (!URL) {
  throw new Error(
    'Missing environment variable - NEXT_PUBLIC_API_URL. It refers to the API where this website fetches schedules, groups etc.'
  )
}

async function apiFetch<T>(
  endpoint: string,
  schema: ZodType<T>,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${URL}${endpoint}`, options)

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`)
  }

  const data = await res.json()

  return schema.parse(data)
}

export async function getGroupsList() {
  return apiFetch('/group', z.array(GroupsList))
}

export async function getGroupById(id: string) {
  return apiFetch(`/group/${id}`, GroupEntity, {
    cache: 'force-cache'
  })
}

export async function getGroupSchedule(id: string, week: 'even' | 'odd') {
  return apiFetch(`/schedule/${id}?week=${week}`, z.array(ScheduleEntity), {
    cache: 'force-cache'
  })
}

export async function getGroupPicture(id: string): Promise<string> {
  try {
    const res = await fetch(`${URL}/group/photo/${id}`, {
      cache: 'force-cache'
    })

    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`)
    }

    return res.text()
  } catch (error) {
    throw new Error(`Failed to fetch group: ${(error as Error).message}`)
  }
}

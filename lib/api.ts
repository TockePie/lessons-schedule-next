import { URLSearchParams } from 'node:url'
import z, { ZodType } from 'zod'

import { GroupList } from '@/types/entities/group'
import { ScheduleEntity } from '@/types/entities/schedule'

export const URL = process.env.NEXT_PUBLIC_API_URL
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
  return apiFetch('/group', z.array(GroupList))
}

export async function getGroupSchedule(
  id: string,
  week?: 'even' | 'odd',
  selectives: string[] = []
) {
  const params = new URLSearchParams()

  if (week) params.append('week', week)

  if (selectives.length > 0) {
    params.append('selectives', selectives.join(','))
  }

  const queryString = params.toString().replaceAll('%2C', ',')
  const url = queryString ? `?${queryString}` : ''

  return apiFetch(`/schedule/${id}${url}`, z.array(ScheduleEntity), {
    cache: 'force-cache'
  })
}

export async function getAllSelectives(id: string) {
  return apiFetch(`/schedule/${id}/selectives`, z.array(ScheduleEntity))
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

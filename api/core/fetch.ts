import ky, { StandardSchemaV1 } from 'ky'

import { handleError } from './handle-error'

export const URL = process.env.NEXT_PUBLIC_API_URL
if (!URL) {
  throw new Error(
    'Missing environment variable - NEXT_PUBLIC_API_URL. It refers to the API where this website fetches schedules, groups etc.'
  )
}

const api = ky.create({
  prefix: URL
})

export async function fetchAndValidate<T>(
  endpoint: string,
  schema: StandardSchemaV1<unknown, T>,
  options: RequestInit = {}
): Promise<T> {
  return api.get(endpoint, options).json(schema).catch(handleError)
}

export async function fetchText(endpoint: string): Promise<string> {
  return api.get(endpoint).text().catch(handleError)
}

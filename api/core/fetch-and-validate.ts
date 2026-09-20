import { StandardSchemaV1 } from 'ky'

import { api } from '.'
import { handleError } from './handle-error'

export async function fetchAndValidate<T>(
  endpoint: string,
  schema: StandardSchemaV1<unknown, T>,
  options: RequestInit = {}
): Promise<T> {
  return api.get(endpoint, options).json(schema).catch(handleError)
}

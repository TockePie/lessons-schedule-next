import { Options, StandardSchemaV1 } from 'ky'

import { apiInstance } from '.'
import { handleHttpError } from './handle-http-error'

export async function fetchValidated<T>(
  path: string,
  responseSchema: StandardSchemaV1<unknown, T>,
  options?: Options
): Promise<T> {
  return apiInstance
    .get(path, options)
    .json(responseSchema)
    .catch(handleHttpError)
}

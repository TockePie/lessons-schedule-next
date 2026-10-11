import { apiInstance } from '.'
import { handleHttpError } from './handle-http-error'

export async function fetchText(path: string): Promise<string> {
  return apiInstance.get(path).text().catch(handleHttpError)
}

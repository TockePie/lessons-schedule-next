import { api } from '.'
import { handleError } from './handle-error'

export async function fetchText(endpoint: string): Promise<string> {
  return api.get(endpoint).text().catch(handleError)
}

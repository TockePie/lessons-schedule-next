import { handleError } from './handle-error'
import { api } from '.'

export async function fetchText(endpoint: string): Promise<string> {
  return api.get(endpoint).text().catch(handleError)
}

import { isKyError, SchemaValidationError } from 'ky'

export function handleError(error: unknown): never {
  if (isKyError(error) && error.name === 'NetworkError') {
    throw new Error(
      "Не вдалося отримати дані з серверу. Можливо відсутнє інтернет-з'єднання із сервером."
    )
  }
  if (error instanceof SchemaValidationError) {
    throw new Error(
      `Некоректна структура відповіді від сервера. Причини: ${JSON.stringify(error.issues, null, 2)}`
    )
  }
  throw error
}

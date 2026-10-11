import ky from 'ky'

import { env } from '@/lib/env'

export const apiInstance = ky.create({
  prefix: env.NEXT_PUBLIC_API_URL
})

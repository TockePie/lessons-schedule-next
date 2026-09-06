import { env } from '../../lib/env'

export async function getTime() {
  const res = await fetch(`${env.THIS_WEBSITE_URL}/api/time`, {
    next: {
      revalidate: 0
    }
  })

  return res.json()
}

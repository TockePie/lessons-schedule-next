export const WEBSITE_URL = process.env.WEBSITE_URL
if (!WEBSITE_URL) {
  throw new Error('Missing environment variable - WEBSITE_URL.')
}

export async function getTime() {
  const res = await fetch(`${WEBSITE_URL}/api/time`, {
    next: {
      revalidate: 0
    }
  })

  return res.json()
}

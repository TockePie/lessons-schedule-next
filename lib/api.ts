import { URL } from 'url'

let url: URL
const env = process.env.NODE_ENV

if (env == 'development') {
  url = new URL('http://localhost:4000')
} else if (env == 'production') {
  url = new URL('https://lessons-schedule-api.vercel.app')
}

export const getGroupsList = async () => {
  const res = await fetch(`${url}group`)

  console.log(url)
  const data = await res.json()

  return data
}

export const getGroupById = async (id: string) => {
  const res = await fetch(`${url}group/${id}`)
  const data = await res.json()

  return data
}

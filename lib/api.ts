export const getGroupsList = async () => {
  const res = await fetch('https://lessons-schedule-api.vercel.app/group')
  const data = await res.json()

  return data
}

export const getGroupById = async (id: string) => {
  const res = await fetch(`https://lessons-schedule-api.vercel.app/group/${id}`)
  const data = await res.json()

  return data
}

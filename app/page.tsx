import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Home() {
  const cookieStore = await cookies()
  const groupId = cookieStore.get('group_id')?.value

  if (groupId) {
    redirect(`/${groupId}`)
  }

  return <div className="bg-neutral-50 dark:bg-black">edvs</div>
}

import React from 'react'
import { cookies } from 'next/headers'

const Page = async () => {
  const cookieStore = await cookies()
  const groupId = cookieStore.get('group_id')?.value

  return (
    <main>
      <div className="bg-neutral-50 dark:bg-black">{groupId}</div>
    </main>
  )
}

export default Page

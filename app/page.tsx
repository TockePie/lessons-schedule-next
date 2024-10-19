import { Link } from '@nextui-org/link'
import { Snippet } from '@nextui-org/snippet'
import { Code } from '@nextui-org/code'
import { button as buttonStyles } from '@nextui-org/theme'

import WeekTab from '@/components/Navbar/components/WeekTab/WeekTab'

export default function Home() {
  return (
    <section className="flex flex-col items-center gap-4 py-2 md:py-10">
      <WeekTab />
      <div className="flex gap-3"></div>
    </section>
  )
}

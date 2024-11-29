import { Spinner } from '@nextui-org/react'

import { LOADING_TEXTS } from '@/common/constants/texts'

const Loading = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-4 md:gap-8 md:py-6">
      <h2 className="text-2xl font-bold lg:text-4xl">{LOADING_TEXTS.title}</h2>
      <Spinner size="lg" />
    </section>
  )
}

export default Loading

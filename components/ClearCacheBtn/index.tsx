'use client'

import { Button } from '@ui/button'
import { useRouter } from 'next/navigation'

export default function ClearCacheBtn({ className }: { className?: string }) {
  const router = useRouter()

  return (
    <Button
      variant="outline"
      className={className}
      onClick={() => {
        router.refresh()
      }}
    >
      Очистити кеш
    </Button>
  )
}

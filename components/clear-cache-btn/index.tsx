'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@ui/button'

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

'use client'

import { useQueryClient } from '@tanstack/react-query'
import { Button } from '@ui/button'
import { useRouter } from 'next/navigation'

export default function ClearCacheBtn({ className }: { className?: string }) {
  const router = useRouter()
  const queryClient = useQueryClient()

  const handleReset = () => {
    queryClient.clear()
    router.refresh()
  }

  return (
    <Button variant="outline" className={className} onClick={handleReset}>
      Очистити кеш
    </Button>
  )
}

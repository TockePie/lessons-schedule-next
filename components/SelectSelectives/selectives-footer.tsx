'use client'

import { Button } from '@ui/button'
import { DialogFooter } from '@ui/dialog'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

import useSelectives from './context/selected'

export default function SelectivesFooter() {
  const { selected, clear } = useSelectives()
  const router = useRouter()

  const handleApply = () => {
    Cookies.set('selected_selectives', JSON.stringify(selected), {
      expires: 30
    })
    router.refresh()
  }

  const handleClear = () => {
    Cookies.remove('selected_selectives')
    clear()
    router.refresh()
  }

  return (
    <DialogFooter>
      <Button variant="outline" onClick={handleClear}>
        Очистити все
      </Button>
      <Button onClick={handleApply}>Застосувати</Button>
    </DialogFooter>
  )
}

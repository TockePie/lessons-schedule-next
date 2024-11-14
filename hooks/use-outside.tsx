import { useCallback, useEffect } from 'react'

const useOutside = (ref: React.RefObject<HTMLElement>, onClose: () => void) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose()
      }
    },
    [ref, onClose]
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [ref, handleClickOutside])
}

export default useOutside

import { useEffect } from 'react'

export function useKeyDown(keys, callback) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  function handleKeyDown(event) {
    if (keys.includes(event.code)) {
      callback(event)
    }
  }
}

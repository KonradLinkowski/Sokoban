import { useState, useEffect } from 'react'

export const useFetch = (url, options) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(
    async () => async () => {
      try {
        setLoading(true)
        const res = await fetch(url, options)
        setResponse(res)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    },
    [url, options]
  )

  return { response, error, loading }
}

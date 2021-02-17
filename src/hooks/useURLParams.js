import { useEffect, useState } from 'react'

export default () => {
  const [url_params, setUrlParams] = useState(() => {
    return new URLSearchParams(window.location.search)
  })

  useEffect(() => {
    setUrlParams(() => {
      return new URLSearchParams(window.location.search)
    })
  }, [window.location.search])

  return url_params
}

import Layout from '@/Layout'
import LoadingScreen from '@/components/LoadingScreen'
import { useEffect, useState } from 'react'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return <>
    <LoadingScreen style={{
      transition: 'opacity 250ms',
      opacity: loading ? 1 : 0,
      pointerEvents: loading ? 'all' : 'none',
    }}/>
    <Layout />
  </>
}

export default App

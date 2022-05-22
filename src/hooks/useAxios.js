import { useContext, useState } from 'react'
import { Context } from '../context/conntext'

export const useAxios = (callback) => {
  const [error, setError] = useState('')
  const { setLoading, setUser, setRepos } = useContext(Context)
  const fetching = async () => {
    try {
      setLoading(true)
      await callback()
    } catch (e) {
      setRepos([])
      setUser('notFound')
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return [fetching, error]
}

import { useContext } from 'react'
import './repositories.scss'
import { Context } from '../../context/conntext'
import { PaginatedItems } from '../pagination/pagination'
import { NotFound } from '../../pages/notFound/notFound'
import { Loader } from '../loader/loader'

export const Repositories = () => {
  const { repos, user, loading } = useContext(Context)
  if (loading) {
    return <Loader />
  }
  return (
    <div className="repositories">
      {repos.length > 0 ? (
        <>
          <h1>Repositories ({user.public_repos})</h1>
          <PaginatedItems itemsPerPage={4} />
        </>
      ) : (
        <NotFound icon={'empty'} />
      )}
    </div>
  )
}

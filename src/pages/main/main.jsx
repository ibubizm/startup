import { useContext } from 'react'
import { Profile } from '../../components/profile/profile'
import { Repositories } from '../../components/repositories/repositories'
import { Context } from '../../context/conntext'
import { NotFound } from '../notFound/notFound'
import './main.scss'

export const Main = () => {
  const { user } = useContext(Context)
  switch (user) {
    case '':
      return <NotFound icon={'search'} />
    case 'notFound':
      return <NotFound icon={'notFound'} />
    case user:
      return (
        <div className="main">
          <Profile />
          <Repositories />
        </div>
      )
    default:
      return <></>
  }
}

import { useContext } from 'react'
import { Context } from '../../context/conntext'
import './profile.scss'
import one from './icons/one.svg'
import duble from './icons/duble.svg'
import { motion } from 'framer-motion'

export const Profile = () => {
  const { user } = useContext(Context)

  return (
    <motion.div
      className="profile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <img className="profile__avatar" src={user.avatar_url} />
      <div className="profile__name">{user.name}</div>
      <a target="_blank" className="profile__link" href={user.html_url}>
        {user.login}
      </a>
      <div className="follow">
        <div>
          <img src={duble} alt="" />
          <span>{user.followers} followers</span>
        </div>
        <div>
          <img src={one} alt="" />
          <span>{user.following} following</span>
        </div>
      </div>
    </motion.div>
  )
}

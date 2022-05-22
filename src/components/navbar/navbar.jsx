import { Input } from '../input/input'
import logo from '../../icons/logo.svg'
import './navbar.scss'
import axios from 'axios'
import { useContext, useState } from 'react'
import { Context } from '../../context/conntext'
import { useAxios } from '../../hooks/useAxios'

export const Navbar = () => {
  const [value, setValue] = useState('')
  const { setRepos, setUser } = useContext(Context)
  const [featching] = useAxios(async () => {
    const { data: user } = await axios.get(
      `https://api.github.com/users/${value}`
    )
    setUser(user)
    const { data: repos } = await axios.get(
      `https://api.github.com/users/${value}/repos`
    )
    setRepos(repos)
  })

  const onSubmit = async (e) => {
    e.preventDefault()
    featching()
  }
  return (
    <div className="nav">
      <div className="nav__content">
        <img className="nav__logo" src={logo} alt="" />
        <Input
          placeholder="Enter GitHub username"
          onSubmit={onSubmit}
          value={value}
          setValue={setValue}
        />
      </div>
    </div>
  )
}

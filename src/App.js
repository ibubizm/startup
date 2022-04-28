import { useState } from 'react'
import './App.css'
import { Navbar } from './components/navbar/navbar'
import { Context } from './context/conntext'
import { Main } from './pages/main/main'

function App() {
  const [user, setUser] = useState('')
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  return (
    <div className="App">
      <Context.Provider
        value={{ user, setUser, repos, setRepos, loading, setLoading }}
      >
        <Navbar />
        <Main />
      </Context.Provider>
    </div>
  )
}

export default App

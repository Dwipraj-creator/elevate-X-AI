import React, { useContext } from 'react'
import Tracker from './components/Tracker'
import UseRef from './components/UseRef'
import { ThemeContext } from './components/ThemeContext'

const App = () => {
  const {theme,toggleTheme}=useContext(ThemeContext)

  return (
    <div>
      <Tracker/>
      <UseRef/>
    </div>
  )
}

export default App
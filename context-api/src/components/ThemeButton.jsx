import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ContextProvider'

const ThemeButton = () => {
    const {theme,toggleTheme}= useContext(ThemeContext)
  return (
    <div>
        <button onClick={toggleTheme}>
            Switch to <span>{theme === "light"? "Dark":"Light"}</span> mode 
        </button>
    </div>
  )
}

export default ThemeButton
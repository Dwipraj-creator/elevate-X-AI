import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ContextProvider'

const Content = () => {
    const {theme,toggleTheme} = useContext(ThemeContext)

    const appStyle = {
        backgroundColor : theme === "light" ? "white": "black",
        color: theme === "light"? "black":"white",
        height:"100vh",

    }
  return (
    <div style={appStyle}>Content</div>
  )
}

export default Content
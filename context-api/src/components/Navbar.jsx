import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ContextProvider'


const Navbar = () => {
    const {theme}=useContext(ThemeContext)
    // const appStyle = {
    //     backgroundColor: theme === "light" ? "white":"black",
    //     color: theme === "light"? "black" : "white"
    // }
  return (
    <div>
        <h1>Current Theme : {theme}</h1>
        {/* <button onClick={toggleTheme}> 
            Switch to {theme} mode
        </button> */}
    </div>
  )
}

export default Navbar
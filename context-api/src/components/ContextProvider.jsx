import React from 'react'
import { useState } from 'react'

import { createContext } from 'react'

export const ThemeContext = createContext()


const ContextProvider = ({children}) => {
const [theme,setTheme]=useState("light");

const toggleTheme = () =>{
    setTheme((prev)=>(prev==="light"? "dark":"light"))
}

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ContextProvider
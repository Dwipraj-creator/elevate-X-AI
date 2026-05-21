import React from 'react'
import ContextProvider from './components/ContextProvider'
import Navbar from './components/Navbar'
import ThemeButton from './components/ThemeButton'
import Content from './components/Content'

const App = () => {
  return (
    <ContextProvider>
      <Navbar/>
      <ThemeButton/>
      <Content/>
    </ContextProvider>
  )
}

export default App
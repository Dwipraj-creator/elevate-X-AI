import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Course from './pages/Course'
import CoursesDetails from './pages/CoursesDetails'
import NotFound from './pages/NotFound'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/courses' element={<Course/>}/>
        <Route path='/courses/:courseId' element={<CoursesDetails/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
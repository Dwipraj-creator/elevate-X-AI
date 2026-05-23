import React from 'react'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import SavedCourses from "./pages/SavedCourses"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import CoursesDetails from './pages/CoursesDetails'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes >
        <Route path="/" element={<Home/>}/>
         <Route path="/courses" element={<Courses/>}/>
         <Route path='/savedCourses' element={<SavedCourses/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/coursesDetails/:courseId' element={<CoursesDetails/>}/>
         <Route path='*' element={<NotFound/>}/>
        </Routes>
     
     
    </div>
  )
}

export default App
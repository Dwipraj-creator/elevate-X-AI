import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor:"#8766",
      gap:'30px',
     padding:"20px",
      display:'flex'

    }}>
    <div>

        <NavLink style={({ isActive }) => ({
    color: isActive ? "red" : "white"
  })}to="/" > Home </NavLink>
        <NavLink style={({ isActive }) => ({
    color: isActive ? "red" : "white"
  })} to="/courses">Courses</NavLink>
        <NavLink style={({ isActive }) => ({
    color: isActive ? "red" : "white"
  })} to="/savedCourses">Saved Courses</NavLink>
        <NavLink style={({ isActive }) => ({
    color: isActive ? "red" : "white"
  })} to="/about">About</NavLink>
        
    </div>
    </nav>
  )
}

export default Navbar
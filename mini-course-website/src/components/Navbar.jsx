import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav
    style={{
      backgroundColor:"green",
      gap:"30px",
      padding: "20px",
      display:"flex"
    }}
    >
      <NavLink  style={({ isActive }) => ({
    color: isActive ? "red" : "white"
  })} to="/">
        Home
      </NavLink>
      <NavLink  style={({ isActive }) => ({
    color: isActive ? "red" : "white"
  })} to = "/about">
        About
      </NavLink>
      <NavLink  style={({ isActive }) => ({
    color: isActive ? "red" : "white"
  })} to="/courses">
      Courses
      </NavLink>
    </nav>
  )
}

export default Navbar
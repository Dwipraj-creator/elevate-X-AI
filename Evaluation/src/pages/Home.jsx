import React from 'react'
import { NavLink } from 'react-router-dom'
import Courses from './Courses'

const Home = () => {
  return (
    <div>
      <h1>
        Welcome To Mini Courses Website
      </h1>
      <p>
        This website is created for the evaluation 
      </p>
      <span>
        Explore More about courses 
      </span>
      <br />
      <button>
        <NavLink to="/courses">Explore about Courses</NavLink>
        
      </button>
    </div>
  )
}

export default Home
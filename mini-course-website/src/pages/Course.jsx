import React from 'react'
import { courses } from '../DemoData/Data'
import { Link } from 'react-router-dom'

const Course = () => {

  return (
    <div>
      <h1>Courses</h1>
      {courses.map((e)=>(
        <div key={e.id}>
          <h2>{e.title}</h2>

            <Link to={`/courses/${e.id}`}>
             View Details 
            </Link>
           
        </div>
      ))}
    </div>
  )
}

export default Course
import React, { useState } from 'react'
import {courses }from "../DemoData/demodata.js"
import {  NavLink } from 'react-router-dom'

const Courses = () => {
  const [input,setInput]= useState("")
 // console.log(courses)

 const filteredData = courses.filter((e)=>{
  const match =  e.title.toLowerCase().includes(input.toLocaleLowerCase())
  return match 
 })

  return (
    <div>

    <input type="text"
    placeholder='Search by name'
    value={input}
    onChange={(e)=>setInput(e.target.value)}
    />


     {filteredData.map((e)=>(
      <li key={e.id}>
         <h3>{e.title}</h3> 
          <button>
            <NavLink to={`/coursesDetails/${e.id}`}>
              Details
            </NavLink>

            
          </button>
      </li>
     ))}
    </div>
  )
}

export default Courses
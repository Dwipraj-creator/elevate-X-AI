import React from 'react'
import { useParams } from 'react-router-dom'
import { courses } from '../DemoData/demodata';

const CoursesDetails = () => {
  const {courseId} = useParams();
  const singleCourse = courses.find((e)=>e.id === Number(courseId))
  if(!singleCourse){
    return <h1>Course Not found</h1>
  }
  return (
    <div>
        <h1>Course Details</h1>
        <div>
          <h2>Title:-{singleCourse.title}</h2>
          <h3>Category:-{singleCourse.category}</h3>
          <h4>Duration:-{singleCourse.duration}</h4>
          <h5>Price:-{singleCourse.price}</h5>
        </div>
    </div>
  )
}

export default CoursesDetails
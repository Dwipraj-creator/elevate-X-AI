import React from 'react'
import { useParams } from 'react-router-dom'
import { courses } from '../DemoData/Data'

const CoursesDetails = () => {
  const {courseId} = useParams()
  const singleCourse = courses.find((e)=>e.id === Number(courseId))
  if(!singleCourse){
    return <h1>Course Not Found</h1>
  }
  return (
    <div>
      <h1>Course Details</h1>
      <div>
        <h2>{singleCourse.title}</h2>

         <h3>{singleCourse.instructor}</h3>

        <h4>{singleCourse.duration}</h4>
      </div>
    </div>
  )
}

export default CoursesDetails
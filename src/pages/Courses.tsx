import React from 'react'
import CPost from '../components/CPost';
import courses from "../models/courses-obj";

const Courses = () => {
  return (
    <div>
      <CPost posts={9} data={courses} title="Courses" className="blk_typo course-main-page" w={300} pw={200} fs={14} btm={true} />
    </div>
  )
}

export default Courses
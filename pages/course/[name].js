import React from 'react'
import Layout from '../../components/Auth/Layout'
import Comments from '../../components/CoursePage/CommentList'
import CourseDetails from '../../components/CoursePage/CourseDetails'
import ViewCourse from '../../components/CoursePage/ViewCourse'

export default function courseData() {
  return (
    <div>
      <Layout>
        <CourseDetails />
        <Comments />
      </Layout>
    </div>
  )
}

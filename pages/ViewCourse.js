import React from "react";
import CourseDetails from "../components/CoursePage/CourseDetials";
import Cards from "../components/CoursePage/Cards";
import Comments from "../components/CoursePage/Comments";

const ViewCourse = () => {
  return (
    <div className="leave_navbar mx-5 min-vh-100">
      <div className="d-flex justify-content-between p-0">
        <CourseDetails />
        <Cards />
      </div>
      <Comments />
    </div>
  );
};

export default ViewCourse;

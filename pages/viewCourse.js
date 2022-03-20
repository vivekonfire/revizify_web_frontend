import React from "react";
import CourseDetails from "../components/CoursePage/CourseDetials";
import Cards from "../components/CoursePage/Cards";
import Comments from "../components/CoursePage/CommentList";

const ViewCourse = () => {
  return (
    <div className="leave_navbar mx-sm-5 mx-1 min-vh-100">
      <div className="d-xl-flex justify-content-between p-0">
        <CourseDetails />
        <Cards text="Download" />
      </div>
      <Comments />
    </div>
  );
};

export default ViewCourse;

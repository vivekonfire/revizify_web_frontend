import React from "react";
import EachCourse from "../Layout/EachCourse";

const CreatedCourses = () => {
  return (
    <div className="text-light m-5">
      <div className="fs-1 fw-bold my-5">Courses Created (25)</div>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 justify-content-evenly">
        <EachCourse />
        <EachCourse />
        <EachCourse />
        <EachCourse />
        <EachCourse />
        <EachCourse />
        <EachCourse />
        <EachCourse />
      </div>
    </div>
  );
};

export default CreatedCourses;

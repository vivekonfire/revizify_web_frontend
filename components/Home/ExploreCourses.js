import React from "react";
import EachCourse from "./EachCourse";

const ExploreCourses = () => {
  return (
    <div className="text-light m-5">
      <div className="fs-1 fw-bold my-5">Explore Course</div>
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
      <div className="d-flex fs-5 fw-bold justify-content-center my-3 w-100">
        See More
      </div>
    </div>
  );
};

export default ExploreCourses;

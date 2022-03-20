import React from "react";
import EachCourse from "../Layout/EachCourse";

const ExploreCourses = () => {
  return (
    <div className="text-light m-5">
      <div className="fs-1 fw-bold my-5">Explore Course</div>
      <div className="row row-cols-6 row-cols-sm-4 row-cols-md-3 justify-content-evenly">
        <EachCourse keey="1" />
        <EachCourse keey="2" />
        <EachCourse keey="3" />
        <EachCourse keey="4" />
        <EachCourse keey="5" />
        <EachCourse keey="6" />
        <EachCourse keey="7" />
        <EachCourse keey="8" />
      </div>
      <div className="d-flex fs-5 fw-bold justify-content-center my-3 w-100">
        See More
      </div>
    </div>
  );
};

export default ExploreCourses;

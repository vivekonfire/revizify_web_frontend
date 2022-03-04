import React from "react";
import EachCourse from "../components/Layout/EachCourse";

const download = () => {
  return (
    <div className="text-light leave_navbar mx-5">
      <div className="my-5 d-lg-flex flex-row">
        <div className="fs-1 fw-bold w-100">Courses Downloaded (25)</div>
      </div>
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

export default download;

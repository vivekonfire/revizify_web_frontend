import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { clearCourse } from "../../store/actions/courseAction";

const CourseNotFound = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCourse());
  });

  return (
    <div className="min-vh-100 text-white d-flex justify-content-center align-items-center flex-column gap-5 mx-5">
      <h1>404</h1>
      <h5 className="text-center">
        Unfortunately the page you are looking for has been moved or deleted{" "}
      </h5>
      <Link href={`/`}>
        <button
          type="button"
          className="background_gradient button_shadow rounded-md px-5 py-4 shadow-lg btn text-white border-0"
          style={{ borderRadius: "30px" }}
        >
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default CourseNotFound;

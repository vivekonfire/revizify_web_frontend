import React, { useEffect } from "react";
import EachCourse from "../Layout/EachCourse";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../store/actions/courseAction";
import noCourse from "../../public/no_course.png";
import Image from "next/image";

const ShowCourse = () => {
  const dispatch = useDispatch();

  const courses = useSelector((state) => state.course.courses);

  useEffect(() => {
    dispatch(getCourses());
  }, []);

  return (
    <div className="text-light leave_navbar mx-5">
      <div className="my-5 d-lg-flex flex-row-reverse">
        <div className="d-flex w-100 justify-content-end py-2">
          <button className="background_gradient button_shadow p-2 btn rounded-pill text-light">
            <Link href="/createCourse">
              <div>+ Add New Course</div>
            </Link>
          </button>
        </div>
        <div className="fs-1 fw-bold w-100">
          Courses Created ({courses?.count})
        </div>
      </div>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 justify-content-evenly">
        {courses?.count > 0 ? (
          courses.results?.map((course, index) => {
            return (
              <EachCourse
                keey={String(index)}
                course={course}
                key={course.course_id}
                name={courses.user_name}
              />
            );
          })
        ) : (
          <>
            <div className="d-flex w-100 flex-column">
              <div className="text-white text-center fs-1 fw-bold">
                You Have No Courses Created
              </div>
              <div className="text-white text-center fs-3 fw-bold">
                Kindy add new Course
              </div>
            </div>
            <div className="min-vh-100 w-100 d-flex flex-column justify-content-center align-items-center">
              <Image src={noCourse} alt="No Course image" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShowCourse;

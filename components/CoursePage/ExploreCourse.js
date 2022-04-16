import React, { useEffect } from "react";
import EachCourse from "../Layout/EachCourse";
import { useDispatch, useSelector } from "react-redux";
import { exploreCourse, getDownloadedCourses } from "../../store/actions/courseAction";
import noCourse from "../../public/no_course.png";
import Image from "next/image";
import Link from "next/link";

const ExploreCourse = () => {
  const dispatch = useDispatch();
  const explore = useSelector((state) => state.course.explore);

  useEffect(() => {
    dispatch(exploreCourse());
  }, []);

  return (
    <div className="text-light leave_navbar mx-5 min-vh-100">
      <div className="my-5 d-lg-flex flex-row-reverse">
        <div className="d-flex w-100 justify-content-end py-2"></div>

        <div className="fs-1 fw-bold w-100">
          Explore Courses
        </div>

      </div>
      <div className="row row-cols-6 row-cols-sm-4 row-cols-md-3">
        {explore?.count > 0 &&
          explore.results.map((course, index) => {
            return (
              <EachCourse
                keey={course?.course_img? course.course_img : "https://picsum.photos/200/300?ramdom="+String(index)}
                course={course}
                key={course?.id}
                show={false}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ExploreCourse;

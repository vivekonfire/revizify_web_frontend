import React, { useEffect } from "react";
import EachCourse from "../Layout/EachCourse";
import { exploreCourse } from "../../store/actions/courseAction";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const ExploreCourses = () => {
  const dispatch = useDispatch();

  const explore = useSelector((state) => state.course.explore);

  useEffect(() => {
    dispatch(exploreCourse());
  }, []);

  return (
    <div className="text-light m-5">
      <div className="fs-1 fw-bold my-5">Explore Course</div>
      <div className="row row-cols-6 row-cols-sm-4 row-cols-md-3">
        {explore?.count > 0 &&
          explore.results.slice(0, 8).map((course, index) => {
            return (
              <EachCourse
                keey={course?.course_img ? course.course_img : "https://picsum.photos/200/300?ramdom=" + String(index)}
                course={course}
                key={course?.id}
                show={false}
              />
            );
          })}
      </div>
      <Link href="/explore">
        <div className="d-flex fs-5 fw-bold justify-content-center my-3 w-100" role="button">
          See More
        </div>
      </Link>

    </div>
  );
};

export default ExploreCourses;

import React, { useEffect } from "react";
import EachCourse from "../Layout/EachCourse";
import { exploreCourse } from "../../store/actions/courseAction";
import { useDispatch, useSelector } from "react-redux";

const ExploreCourses = () => {
  const dispatch = useDispatch();

  const explore = useSelector((state) => state.course.explore);

  useEffect(() => {
    dispatch(exploreCourse());
    //eslint-disable-next-line
  });

  return (
    <div className="text-light m-5">
      <div className="fs-1 fw-bold my-5">Explore Course</div>
      <div className="row row-cols-6 row-cols-sm-4 row-cols-md-3 justify-content-evenly">
        {explore?.count > 0 &&
          explore.results.map((course, index) => {
            return (
              <EachCourse
                keey={String(index)}
                course={course}
                key={course?.id}
              />
            );
          })}
      </div>
      <div className="d-flex fs-5 fw-bold justify-content-center my-3 w-100">
        See More
      </div>
    </div>
  );
};

export default ExploreCourses;

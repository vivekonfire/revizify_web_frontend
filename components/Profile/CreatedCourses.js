import React from "react";
import EachCourse from "../Layout/EachCourse";

const CreatedCourses = ({ results, count, user_name }) => {
  return (
    <div className="text-light m-5">
      <div className="fs-1 fw-bold my-5">Courses Created ({count})</div>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 justify-content-evenly">
        {count > 0 &&
          results.map((course, index) => {
            return (
              <EachCourse
                keey={String(index)}
                key={course.course_id}
                course={course}
                name={user_name}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CreatedCourses;

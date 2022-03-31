import React, { useEffect } from "react";
import EachCourse from "../Layout/EachCourse";
import { useDispatch, useSelector } from "react-redux";
import { getArchivedCourses, getDownloadedCourses } from "../../store/actions/courseAction";
import noCourse from "../../public/no_course.png";
import Image from "next/image";

const ArchiveCourse = () => {
  const dispatch = useDispatch();

  const archive = useSelector((state) => state.course.courses);

  useEffect(() => {
    dispatch(getArchivedCourses());
  }, []);

  return (
    <div className="text-light leave_navbar mx-5 min-vh-100">
      <div className="my-5 d-lg-flex flex-row-reverse">
        <div className="d-flex w-100 justify-content-end py-2"></div>
        <div className="fs-1 fw-bold w-100">
          Courses Archived ({archive?.count})
        </div>
      </div>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 justify-content-evenly">
        {archive?.count > 0 ? (
          archive.results?.map((course, index) => {
            return (
              <EachCourse
                keey={String(index)}
                course={course}
                key={course.course_id}
                name={archive?.user_name}
                is_archived={true}
              />
            );
          })
        ) : (
          <>
            <div className="d-flex w-100 flex-column">
              <div className="text-white text-center fs-1 fw-bold">
                You Have No Courses Archived
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

export default ArchiveCourse;

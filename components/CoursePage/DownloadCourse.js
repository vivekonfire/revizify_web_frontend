import React, { useEffect } from "react";
import EachCourse from "../Layout/EachCourse";
import { useDispatch, useSelector } from "react-redux";
import { getDownloadedCourses } from "../../store/actions/courseAction";
import noCourse from "../../public/no_course.png";
import Image from "next/image";
import Link from "next/link";

const DownloadCourse = () => {
  const dispatch = useDispatch();

  const download = useSelector((state) => state.course.downloaded_courses);
  const isLogin = useSelector((state) => state.auth.valid_token);

  useEffect(() => {
    dispatch(getDownloadedCourses());
  }, []);

  return (
    <div className="text-light leave_navbar mx-5 min-vh-100">
      <div className="my-5 d-lg-flex flex-row-reverse">
        <div className="d-flex w-100 justify-content-end py-2"></div>
        {isLogin && (
          <div className="fs-1 fw-bold w-100">
            Courses Downloaded ({download?.count})
          </div>
        )}
      </div>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4">
        {!isLogin ? (
          <>
            <div className="d-flex w-100 flex-column">
              <div className="text-white text-center fs-1 my-4 fw-bold">
                Please login to see the Download Courses
              </div>
            </div>
            <button
              type="button"
              className="btn rounded-pill background_gradient button_shadow border-0 text-light col-4 p-2 fs-5 "
            >
              <Link href="/loginEmail">
                <div>Login</div>
              </Link>
            </button>
          </>
        ) : download?.count > 0 && download !== null ? (
          download.results?.map((course, index) => {
            return (
              <EachCourse
                keey={String(index)}
                course={course}
                key={course.course_id}
                name={download?.user_name}
                show={true}
              />
            );
          })
        ) : (
          <>
            <div className="d-flex w-100 flex-column">
              <div className="text-white text-center fs-1 fw-bold">
                You Have No Courses Downloaded
              </div>
              <div className="text-white text-center fs-3 fw-bold">
                Kindy download any Course
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

export default DownloadCourse;

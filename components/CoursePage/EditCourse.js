import React, { useState, useEffect } from "react";
import Image from "next/image";
import robot from "../../public/robot.png";
import { BsCardImage } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { editCourse, getCourse } from "../../store/actions/courseAction";
import { useRouter } from "next/router";

const EditCourse = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const course = useSelector((state) => state.course.course);
  const [aboutCourse, setAboutCourse] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    const form = {
      course_desc: aboutCourse,
      course_id: course?.course_id,
    };

    dispatch(editCourse(form));
  };

  useEffect(() => {
    dispatch(getCourse(router.query.id));
  }, [router.query.id]);

  return (
    <div className="min-vh-100 d-lg-flex leave_navbar">
      <div className="container d-flex justify-content-center p-4 text-light ">
        <div className="bg-black bg-opacity-25 rounded-md h-100 mx-xxl-5 mx-xl-0 mx-lg-5 mx-sm-0 p-5 shadow-lg">
          <form onSubmit={onSubmit}>
            <h1 className="mb-5">Create New Course</h1>
            <div>
              <label
                htmlFor="name"
                className="pt-5 d-flex justify-content-between"
              >
                <div className="fs-4">Course Name</div>
                <div className="fs-6">(0/100)</div>
                <div className="fs-6">The Title of your course</div>
              </label>
              <input
                name="name"
                type="text"
                className="form-control rounded-pill w-100 p-3 bg-white bg-opacity-25 border-0 my-3 text-white"
                onChange={(e) => {
                  setCourseName(e.target.value);
                }}
                value={course?.course_name}
                disabled
              />
            </div>
            <div>
              <label
                htmlFor="about"
                className="pt-5 d-flex justify-content-between"
              >
                <div className="fs-4">About the course</div>
                <div className="fs-6">(0/500)</div>
              </label>
              <textarea
                className="rounded-sm w-100 p-3 height_text_area bg-black bg-opacity-25 text-white"
                placeholder="Enter here"
                onChange={(e) => {
                  setAboutCourse(e.target.value);
                }}
                value={aboutCourse}
              />
              a small description of what users get to study/revise when they
              download your course
            </div>
            <br />
            <div>
              <label htmlFor="thumbnail" className="pt-4 fs-4">
                Upload Course Thumbnail
                <br />
                <div className=" d-xxl-flex justify-content-center align-items-stretch">
                  <div className="d-flex justify-content-center align-items-center col-xxl-6 col-12">
                    {/* {selectedImage ? (
                      <div className="col-8 d-flex justify-content-center">
                        <Image
                          s
                          alt="course image"
                          width={223}
                          height={126}
                          className="rounded-sm"
                        />
                      </div>
                    ) : ( */}
                    <div
                      className="bg-black bg-opacity-25 rounded-sm pointer_cursor col-6 d-flex justify-content-center align-items-center fs-1"
                      style={{
                        minHeight: "126px",
                        minWidth: "223px",
                        maxHeight: "126px",
                        maxWidth: "223px",
                      }}
                    >
                      <BsCardImage />
                    </div>
                  </div>
                  <p className="fs-6 col-xxl-6 p-2 align-self-end">
                    Select or upload a picture that shows whats in your course.
                    A good thumbnailstands out and grabs viewers attention.
                    Thumbnail Requirements: Have a resolution of 1280*720 (with
                    a minimum width of 640 pixels). Be uploaded in image formats
                    such as JPG, GIF, or PNG. Remain under the 2MB Limit.
                  </p>
                </div>
              </label>
            </div>

            <br />
            <div className="w-100 d-flex justify-content-start mt-4">
              <button
                className="col-4 background_gradient button_shadow border-0 btn rounded-pill p-3 text-light fs-4 fw-bold"
                type="submit"
                onClick={onSubmit}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-6 d-none d-xl-flex leave_navbar d-flex justify-content-center p-4 text-light">
        <div>
          <Image src={robot} alt="signup page image" />
        </div>
      </div>
    </div>
  );
};

export default EditCourse;

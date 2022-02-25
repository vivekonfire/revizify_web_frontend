import React from "react";
import Image from "next/image";
import robot from "../public/robot.png";

const createCourse = () => {
  return (
    <div className="min-vh-100 d-lg-flex leave_navbar">
      <div className="w-100 leave_navbar d-flex justify-content-center p-4 text-light">
        <div className="bg-black bg-opacity-50 rounded-md h-100 w-100 mx-md-5 p-5 shadow-lg">
          <form>
            <h1 className="mb-5">Create New Course</h1>
            <div>
              <label
                htmlFor="name"
                className="pt-5 d-flex justify-content-between"
              >
                <div className="fs-4">Course Name</div>
                <div className="fs-6">(0/100)</div>
                <div className="fs-6">The title of your course</div>
              </label>
              <input
                name="name"
                type="text"
                className="form-control rounded-pill w-100 p-3 bg-black bg-opacity-25 border-0 my-3"
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
                className="rounded-sm w-100 p-3 height_text_area bg-black bg-opacity-25"
                placeholder="Enter here"
              />
              a small description of what users get to study/revise when they
              downloadyour course
            </div>
            <br />
            <div>
              <label htmlFor="thumbnail" className="pt-4 fs-4 ">
                Upload Course Thumbnail
                <br />
                <div
                  className="bg-black bg-opacity-25 rounded-sm pointer_cursor"
                  style={{ height: "225px", width: "390px" }}
                />
              </label>
              <input
                type="file"
                accept="image/*"
                id="thumbnail"
                style={{ display: "none" }}
              />
            </div>
            <br />
            <div className="w-100 d-flex justify-content-start mt-4">
              <button
                className="w-50 bg-black btn rounded-pill p-3 text-light"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-100 leave_navbar d-flex justify-content-center align-items-center p-4 text-light">
        <div>
          <Image src={robot} alt="signup page image" />
        </div>
      </div>
    </div>
  );
};

export default createCourse;
import React from "react";
import Image from "next/image";
import study from "../../public/study.png";
import { FaUserAlt } from "react-icons/fa";

const RegisterForm = () => {
  return (
    <div className="min-vh-100 d-lg-flex leave_navbar">
      <div className="container d-flex justify-content-center p-4 text-light">
        <div className="bg-black bg-opacity-25 rounded-md h-100 mx-xxl-5 mx-xl-0 mx-lg-5 mx-sm-0 p-5 shadow-lg">
          <form>
            <h1 className="mb-5">Profile</h1>
            <div>
              <label htmlFor="image" className="pt-4 fd-5">
                Upload Profile Picture
                <br />
                <div
                  className="d-flex justify-content-center align-items-center bg-black bg-opacity-25 rounded-circle course_option pointer_cursor"
                  style={{ height: "100px", width: "100px" }}
                >
                  <FaUserAlt className="fs-3" />
                </div>
              </label>
              <input
                type="file"
                accept="image/*"
                id="image"
                style={{ display: "none" }}
              />
            </div>
            <div>
              <label htmlFor="username" className="pt-5 fs-5">
                Username
              </label>
              <input
                name="username"
                type="text"
                className="form-control rounded-pill w-100 p-3 bg-black bg-opacity-25 border-0 my-3"
              />
            </div>
            <div>
              <label htmlFor="name" className="pt-5 fs-5">
                Name
              </label>
              <input
                name="name"
                type="text"
                className="form-control rounded-pill w-100 p-3 bg-black bg-opacity-25 border-0 my-3"
              />
            </div>
            <div>
              <label htmlFor="email" className="pt-5 fs-5">
                Email Id
              </label>
              <input
                name="email"
                type="email"
                className="form-control rounded-pill w-100 p-3 bg-black bg-opacity-25 border-0 my-3"
              />
            </div>
            <div>
              <label htmlFor="number" className="pt-5 fs-5">
                Phone Number
              </label>
              <input
                name="number"
                type="text"
                className="form-control rounded-pill w-100 p-3 bg-black bg-opacity-25 border-0 my-3"
              />
              (ProvidingYour Phone number is beneficial if you are a creator and
              plan on making courses on revizify)
            </div>
            <div>
              <label htmlFor="bio" className="pt-5 fs-5">
                Bio
              </label>
              <textarea
                className="rounded-sm w-100 p-3 height_text_area bg-black bg-opacity-25 border-0"
                placeholder="Enter here"
              />
            </div>
            <br />
            <div className="w-100 d-flex justify-content-end mt-4">
              <button
                className="col-4 background_gradient button_shadow border-0 btn rounded-pill p-2 text-light fs-5 fw-bold"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-6 d-xl-flex justify-content-center p-4 text-light d-none">
        <div>
          <Image src={study} alt="edit profile page image" />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

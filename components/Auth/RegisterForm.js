import React from "react";
import Image from "next/image";
import man_flying from "../../public/man_flying.png";
import { FaUserAlt } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";

const RegisterForm = () => {
  return (
    <div className="min-vh-100 d-lg-flex leave_navbar">
      <div className="container d-flex justify-content-center p-4 text-light">
        <div className="bg-black bg-opacity-25 rounded-md h-100 mx-xxl-5 mx-xl-0 mx-lg-5 mx-sm-0 p-4 p-md-5 shadow-lg">
          <form>
            <h1 className="mb-5">Register</h1>
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
            <div className="d-sm-flex justify-content-between mt-5">
              <label htmlFor="email" className="fs-5 col-md-3 col-sm-4 col-12">
                Email Id*
              </label>
              <input
                name="email"
                type="email"
                className="form-control rounded-pill w-100 p-3 bg-black bg-opacity-25 border-0"
              />
            </div>
            <div className="d-sm-flex justify-content-between mt-5">
              <label
                htmlFor="username"
                className="fs-5 col-md-3 col-sm-4 col-12"
              >
                Username*
              </label>
              <input
                name="username"
                type="text"
                className="form-control rounded-pill w-100 p-3 bg-black bg-opacity-25 border-0"
              />
            </div>
            <p className="mt-3">
              (Username should be unique, you will be searched by this name on
              Revizify)
            </p>
            <div className="d-sm-flex justify-content-between mt-5">
              <label htmlFor="name" className="fs-5 col-md-3 col-sm-4 col-12">
                Name*
              </label>
              <input
                name="name"
                type="text"
                className="form-control rounded-pill w-100 p-3 bg-black bg-opacity-25 border-0"
              />
            </div>
            <div className="d-sm-flex justify-content-between mt-5">
              <label
                htmlFor="password"
                className="fs-5 col-md-3 col-sm-4 col-12"
              >
                Password
              </label>
              <div className="position-relative col-md-9 col-sm-8 col-12">
                <input
                  className="form-control rounded-pill w-100 p-3 bg-black bg-opacity-25 border-0 my-3"
                  name="password"
                  type="password"
                />
                <BsFillEyeFill className="position-absolute top-50 end-0 mx-3 translate-middle-y" />
              </div>
            </div>
            <div className="d-sm-flex justify-content-between mt-5">
              <label htmlFor="number" className="fs-5 col-md-3 col-sm-4 col-12">
                Phone Number*
              </label>
              <input
                name="number"
                type="text"
                className="form-control rounded-pill w-100 p-3 bg-black bg-opacity-25 border-0 my-3"
              />
            </div>
            <p className="mt-3">
              (ProvidingYour Phone number is beneficial if you are a creator and
              plan on making courses on revizify)
            </p>
            <div className="w-100 d-flex justify-content-start mt-4">
              <button
                className="col-4 background_gradient button_shadow border-0 btn rounded-pill p-3 text-light fs-4 fw-bold"
                type="submit"
              >
                Let's Go!!
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-6 d-none d-xl-flex leave_navbar d-flex justify-content-center p-4 text-light">
        <div>
          <Image src={man_flying} alt="signup page image" />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

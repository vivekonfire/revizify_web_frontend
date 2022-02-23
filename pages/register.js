import React from "react";
import Image from "next/image";
import man_flying from "../public/man_flying.png";
import { FaUserAlt } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";

const register = () => {
  return (
    <div className="min-vh-100 d-lg-flex">
      <div className="w-100 leave_navbar d-flex justify-content-center p-4 text-light">
        <div className="bg-black bg-opacity-50 rounded-md h-100 w-100 mx-md-5 p-5 shadow-lg">
          <form>
            <h1 className="mb-5">Register</h1>
            <div>
              <label htmlFor="image" className="pt-4 fd-5">
                Upload Profile Picture
                <br />
                <div
                  className="d-flex justify-content-center align-items-center bg-black bg-opacity-25 rounded-circle course_option"
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
                Username *
              </label>
              <input
                name="username"
                type="text"
                className="form-control rounded-pill w-100 p-3 bg-black bg-opacity-25 border-0 my-3"
              />
              (Username should be unique, you will be searched by this name on
              Revizify)
            </div>
            <div>
              <label htmlFor="name" className="pt-5 fs-5">
                Name *
              </label>
              <input
                name="name"
                type="text"
                className="form-control rounded-pill w-100 p-3 bg-black bg-opacity-25 border-0 my-3"
              />
            </div>
            <div>
              <label htmlFor="password" className="pt-5 fd-5">
                Password
              </label>
              <div className="position-relative">
                <input
                  className="form-control rounded-pill w-100 p-3 bg-black bg-opacity-25 border-0 my-3"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <BsFillEyeFill className="position-absolute top-50 end-0 mx-3 translate-middle-y" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="pt-5 fs-5">
                Email Address *
              </label>
              <input
                name="email"
                type="email"
                className="form-control rounded-pill w-100 p-3 bg-black bg-opacity-25 border-0 my-3"
              />
            </div>
            <div>
              <label htmlFor="number" className="pt-5 fs-5">
                Phone Number *
              </label>
              <input
                name="number"
                type="text"
                className="form-control rounded-pill w-100 p-3 bg-black bg-opacity-25 border-0 my-3"
              />
              (ProvidingYour Phone number is beneficial if you are a creator and
              plan on making courses on revizify)
            </div>
            <br />
            <div className="w-100 d-flex justify-content-start mt-4">
              <button
                className="w-50 bg-black btn rounded-pill p-3 text-light"
                type="submit"
              >
                Let's Go!!
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-100 leave_navbar d-flex justify-content-center align-items-center p-4 text-light">
        <div>
          <Image src={man_flying} alt="signup page image" />
        </div>
      </div>
    </div>
  );
};

export default register;

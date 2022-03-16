import React from "react";
import Link from "next/link";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const ForgotPassword = () => {
  return (
    <div className="min-vh-100 leave_navbar text-white d-flex justify-content-center align-items-center">
      <div className="mx-2">
        <p className="fs-3 fw-bold w-100 text-center">Reset Your Password</p>
        <div className="bg-black bg-opacity-25 rounded-md m-4 form_container">
          <form className="px-md-5 px-2 py-5 d-flex flex-column justify-content-evenly w-100 h-100">
            <div className="mb-5">
              <label htmlFor="newPassword" className="mb-2 fs-5">
                Enter New Password
              </label>
              <input
                className="input-form bg-black bg-opacity-25 border-0 rounded-pill col-12 text-white p-3"
                name="newPassword"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="confirmPassword" className="mb-2 fs-5">
                Confirm New Password
              </label>
              <div className="position-relative">
                <input
                  className="form-control rounded-pill border-0 bg-black bg-opacity-25 p-3 col-12"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <BsFillEyeFill className="position-absolute top-50 end-0 mx-3 translate-middle-y" />
              </div>
            </div>
            <div className="d-flex justify-content-md-end justify-content-center">
              <button
                type="submit"
                className="btn rounded-pill background_gradient button_shadow border-0 text-light col-4 p-2 fs-5 "
              >
                <Link href="/loginEmail">
                  <div>Confirm</div>
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

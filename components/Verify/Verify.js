import React from "react";
import VerifyForm from "./VerifyForm";
import VerifyQuestions from "./VerifyQuestions";
import { useSelector } from "react-redux";
import Link from "next/link";

const Verify = () => {
  const isLogin = useSelector((state) => state.auth.valid_token);

  return (
    <>
      {!isLogin ? (
        <div className="leave_navbar min-vh-100 d-flex flex-column justify-content-center align-items-center">
          <div className="text-white text-center fs-2 my-4 fw-bold">
            Please login to Verify as a Educator and start Publishing Courses
          </div>
          <button
            type="button"
            className="btn rounded-pill background_gradient button_shadow border-0 text-light col-4 p-2 fs-5 "
          >
            <Link href="/loginEmail">
              <div>Login</div>
            </Link>
          </button>
        </div>
      ) : (
        <div className="min-vh-100 d-xl-flex leave_navbar">
          <VerifyForm />
          <VerifyQuestions />
        </div>
      )}
    </>
  );
};

export default Verify;

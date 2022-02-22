import Link from "next/link";
import React from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
const loginPassword = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center text-light">
      <div
        className="bg-black bg-opacity-50"
        style={{ borderRadius: "30px" }}
        p-5
      >
        <form className="m-5">
          <label htmlFor="email" className="mt-5 mx-5 mb-2">
            {" "}
            Hi Abhinav Agarwal! (not you?)
          </label>
          <div
            className="position-relative my-3 mx-5"
            style={{ width: "540px" }}
          >
            <input
              className="form-control rounded-pill bg-black bg-opacity-25 p-2 border-black w-100"
              name="email"
              type="password"
              placeholder="Password"
            />
            <BsFillEyeFill className="position-absolute top-50 end-0 mx-3 translate-middle-y" />
          </div>
          <button
            type="submit"
            className="btn rounded-pill bg-black text-light float-end mb-5 mx-5"
          >
            <Link href="/">
              <div>Login</div>
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default loginPassword;

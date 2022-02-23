import Link from "next/link";
import React from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
const loginPassword = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center text-light flex-column">
      <div className="d-flex flex-column align-items-center">
        <h1 className="spaced_text">Revizify</h1>
        <p>Your first step to the power of a Super memory</p>
      </div>
      <div className="bg-black bg-opacity-50 login_container rounded-md" p-5>
        <form className="p-5 d-flex flex-column justify-content-evenly align-items-center w-100 h-100">
          <label htmlFor="email" className="fs-5">
            {" "}
            Hi Abhinav Agarwal! <span className="text-danger">(not you?)</span>
          </label>
          <div
            className="position-relative my-3 mx-5"
            style={{ width: "540px" }}
          >
            <input
              className="form-control rounded-pill bg-black bg-opacity-25 p-3 w-100"
              name="password"
              type="password"
              placeholder="Password"
            />
            <BsFillEyeFill className="position-absolute top-50 end-0 mx-3 translate-middle-y" />
          </div>
          <button
            type="submit"
            className="btn rounded-pill bg-black text-light float-bottom w-25"
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

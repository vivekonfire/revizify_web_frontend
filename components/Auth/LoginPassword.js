import React, { useState } from "react";
import Link from "next/link";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import Image from "next/image";
import logo from "../../public/logo_border.png";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../store/actions/authActions";

const LoginPassword = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.user.email);

  const [password, setPassword] = useState(null);

  const onClick = (e) => {
    e.preventDefault();

    const form = {
      email: email,
      password: password,
    };
    dispatch(loginAction(form));
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center text-light flex-column">
      <div className="d-flex">
        <Image src={logo} alt="Revizify Logo" />
        <div className="d-flex flex-column align-items-center col-10">
          <h1 className="spaced_text text-center m-0">Revizify</h1>
          <p className="text-center m-0 p-0">
            Your first step to the power of a Super memory
          </p>
        </div>
      </div>
      <div className="bg-black bg-opacity-25 form_container rounded-md">
        <form
          className="px-md-5 px-2 py-5 d-flex flex-column justify-content-evenly w-100 h-100"
          onSubmit={onClick}
        >
          <label
            htmlFor="email"
            className="fs-4 fw-bold col-12 text-md-start text-center mb-5"
          >
            Hi Abhinav Agarwal! (
            <Link href="/loginEmail">
              <span className="text-danger fw-light"> not you? </span>
            </Link>
            )
          </label>
          <div className="position-relative">
            <input
              className="form-control rounded-pill border-0 bg-black bg-opacity-25 p-3 col-12 text-white"
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <BsFillEyeFill className="position-absolute top-50 end-0 mx-3 translate-middle-y" />
          </div>
          <div className="d-flex justify-content-end fw-lighter pointer_cursor">
            <Link href="/forgotpasswordemail">
              <div>Forgot Password?</div>
            </Link>
          </div>
          <div className="d-flex justify-content-md-end justify-content-center">
            <button
              onClick={onClick}
              type="submit"
              className="btn rounded-pill background_gradient button_shadow border-0 text-light col-4 p-2 fs-5 mt-4"
            >
              <Link href="/">
                <div>Login</div>
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPassword;

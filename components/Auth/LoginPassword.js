import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import Image from "next/image";
import logo from "../../public/logo_border.png";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../store/actions/authActions";
import { resetPasswordEmail } from "../../store/actions/authActions";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const LoginPassword = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const error = useSelector((state) => state.auth.error);
  const [password, setPassword] = useState(null);
  const [eye, setEye] = useState(false);
  const [localError, setLocalError] = useState("");
  const [loading, setLoading] = useState(true);
  const email = Cookies.get("email");
  const user_name = Cookies.get("userName");

  const onForgot = (e) => {
    e.preventDefault();

    alert("Check your mail");
    dispatch(resetPasswordEmail({ email: email }));

    router.replace("/");
  };
  useEffect(() => {
    if (error === null && !loading) router.push("/");

    setLoading(false);
  }, [error]);

  const onClick = async (e) => {
    e.preventDefault();

    if (password === null) {
      setLocalError("Please enter your password before submitting");
    } else {
      const form = {
        email: email,
        password: password,
      };
      dispatch(loginAction(form));
    }
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
            Hi {user_name}! (
            <Link href="/loginEmail">
              <span className="text-danger fw-light"> not you? </span>
            </Link>
            )
          </label>
          {error && (
            <div className="text-danger fs-6 fw-bold mb-2">
              {error?.password}
            </div>
          )}
          {localError !== null ? (
            <div className="text-danger fs-6 fw-bold mb-2">{localError}</div>
          ) : (
            <></>
          )}
          <div className="position-relative">
            {eye ? (
              <input
                className="form-control rounded-pill border-0 bg-black bg-opacity-25 p-3 col-12 text-white"
                name="password"
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            ) : (
              <input
                className="form-control rounded-pill border-0 bg-black bg-opacity-25 p-3 col-12 text-white"
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            )}
            {eye ? (
              <BsFillEyeSlashFill
                className="position-absolute top-50 end-0 mx-3 translate-middle-y pointer_cursor fs-5"
                onClick={() => {
                  setEye(!eye);
                }}
              />
            ) : (
              <BsFillEyeFill
                className="position-absolute top-50 end-0 mx-3 translate-middle-y pointer_cursor fs-5"
                onClick={() => {
                  setEye(!eye);
                }}
              />
            )}
          </div>
          <div
            className="d-flex justify-content-end fw-lighter pointer_cursor"
            onClick={onForgot}
          >
            <div>Forgot Password?</div>
          </div>
          <div className="d-flex justify-content-md-end justify-content-center">
            <button
              onClick={onClick}
              type="submit"
              className="btn rounded-pill background_gradient button_shadow border-0 text-light col-4 p-2 fs-5 mt-4"
            >
              <div>Login</div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPassword;

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/logo_border.png";
import { checkUser } from "../../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import {
  passwordValidator,
  registerAction,
  usernameValidator, loginAction
} from "../../store/actions/authActions";
import man_flying from "../../public/man_flying.png";
import styles from "../../styles/Login.module.css"


const LoginEmail = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [data, setData] = useState("");
  const isLogin = useSelector((state) => state.auth.valid_token);
  const [isEmailValid, setEmailValid] = useState(false);
  const [regForm, setRegForm] = useState(false);

  const error = useSelector((state) => state.auth.error);
  const [password, setPassword] = useState(null);
  const [eye, setEye] = useState(false);
  const [localError, setLocalError] = useState("");
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errEmail, setErrEmail] = useState("");

  const ValidateUserName = useSelector((state) => state.auth.validity_username);
  const ValidatePassword = useSelector((state) => state.auth.validity_password);
  const [errorName, setErrorName] = useState("");
  const [errorNumber, setErrorNumber] = useState("");
  const [form, setForm] = useState({
    email: "",
    user_name: "",
    password: "",
    phone_number: "",
    name: "",
  });

  const emailCheck = async (e) => {
    e.preventDefault();

    await dispatch(checkUser({ id: data }));

    const headers = {
      "Content-Type": "Application/json",
    };

    const res = await axios.post(
      `https://data.revizify.com/api/v1/user/check_user`,
      { id: data },
      { headers }
    );

    if (res.data.is_existing) {
      setEmailValid(true);
      setName(res.data.name);
    } else {
      if (res.data.error !== undefined) {
        setErrEmail(res.data.error);
        setData("");
      }
      else {
        setRegForm(true);
      }
      setEmailValid(false);
    }
    setEmail(res.data.email);
  };

  useEffect(() => {
    if (isLogin) router.push("/");
  });










  const onForgot = (e) => {
    e.preventDefault();

    alert("Check your mail");
    dispatch(resetPasswordEmail({ email: email }));
    console.log(error);
    router.push("/");
  };
  useEffect(() => {
    if (error === null && !loading && isLogin) router.push("/");

    setLoading(false);
  }, [error, isLogin]);

  const loginButton = async (e) => {
    e.preventDefault();

    if (password === null) {
      setLocalError("Please enter your password");
    } else {
      const form = {
        email: email,
        password: password,
      };
      dispatch(loginAction(form));
    }
  };









  useEffect(() => {
    if (router.query.email !== undefined)
      setForm({ ...form, email: router.query.email });

    console.log(error);
    if (!loading && error === null) router.push("/");

    setLoading(false);
  }, [router.query.email, error]);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const userNameChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    dispatch(usernameValidator(e.target.value));
  };

  const passwordChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    dispatch(passwordValidator(e.target.value));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.name === "") {
      setErrorName("This field required");
    }
    if (form.phone_number === "") {
      setErrorNumber("This field required");
    }
    if (form.user_name === "") {
      dispatch(usernameValidator(""));
    }
    if (form.password === "") {
      dispatch(passwordValidator(""));
    }
    if (form.name !== "" && form.phone_number !== "") {
      setErrorNumber("");
      setErrorName("");
      dispatch(registerAction(form));
    }
  };








  return (<>
    {regForm ?
      <div className="min-vh-100 d-lg-flex leave_navbar">
        <div className="container d-flex justify-content-center p-4 text-light">
          <div className="bg-black bg-opacity-25 rounded-md h-100 mx-xxl-5 mx-xl-0 mx-lg-5 mx-sm-0 p-4 p-md-5 shadow-lg">
            <form onSubmit={onSubmit}>
              <h1 className="mb-5">Register</h1>
              <div className="d-sm-flex justify-content-between mt-5">
                <label
                  htmlFor="email"
                  className="fs-5 col-md-3 col-sm-4 col-12 my-auto"
                >
                  Email Id*
                </label>
                <div className="w-100">
                  {error?.email && (
                    <div>
                      {error?.email?.map((err, index) => {
                        return (
                          <div
                            className="text-danger fs-6 fw-bold mb-2"
                            key={index}
                          >
                            {err}
                          </div>
                        );
                      })}
                    </div>
                  )}
                  <div className="position-relative w-100">
                    <input
                      name="email"
                      type="email"
                      className="form-control rounded-pill w-100 p-3 bg-white bg-opacity-25 border-0 text-white"
                      value={email}
                      readOnly
                    />
                    <span className="position-absolute top-50 start-100 translate-middle pe-5 pointer_cursor" role="button" onClick={() => (
                      setRegForm(false)
                    )}>
                      edit?
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-sm-flex justify-content-between mt-5">
                <label
                  htmlFor="username"
                  className="fs-5 col-md-3 col-sm-4 col-12 my-auto"
                >
                  Username*
                </label>
                <div className="w-100">
                  {error?.user_name && (
                    <div>
                      {error?.user_name?.map((err, index) => {
                        return (
                          <div
                            className="text-danger fs-6 fw-bold mb-2"
                            key={index}
                          >
                            {err}
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {ValidateUserName?.message?.length > 0 && (
                    <div
                      className={
                        ValidatePassword?.status === 200
                          ? "text-success fs-6 fw-bold mb-2"
                          : "text-danger fs-6 fw-bold mb-2"
                      }
                    >
                      {ValidateUserName?.message}
                    </div>
                  )}
                  <input
                    name="user_name"
                    type="text"
                    className="form-control rounded-pill w-100 p-3 bg-black bg-opacity-25 border-0 text-white"
                    onChange={userNameChange}
                  />
                </div>
              </div>
              <p className="mt-3">
                (Username should be unique, you will be searched by this name on
                Revizify)
              </p>
              <div className="d-sm-flex justify-content-between mt-5">
                <label
                  htmlFor="name"
                  className="fs-5 col-md-3 col-sm-4 col-12 my-auto"
                >
                  Name*
                </label>
                <div className="w-100">
                  {error?.name && (
                    <div>
                      {error?.name?.map((err, index) => {
                        return (
                          <div
                            className="text-danger fs-6 fw-bold mb-2"
                            key={index}
                          >
                            {err}
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {errorName.length > 0 && (
                    <div className="text-danger fs-6 fw-bold mb-2">
                      {errorName}
                    </div>
                  )}
                  <input
                    name="name"
                    type="text"
                    className="form-control rounded-pill w-100 p-3 bg-black bg-opacity-25 border-0 text-white"
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="d-sm-flex justify-content-between mt-5">
                <label
                  htmlFor="password"
                  className="fs-5 col-md-3 col-sm-4 col-12 my-auto"
                >
                  Password
                </label>
                <div className="col-md-9 col-sm-8 col-12">
                  {error?.password && (
                    <div>
                      {error?.password?.map((err, index) => {
                        return (
                          <div
                            className="text-danger fs-6 fw-bold mb-2"
                            key={index}
                          >
                            {err}
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {ValidatePassword?.message?.length > 0 && (
                    <div
                      className={
                        ValidatePassword?.status === 200
                          ? "text-success fs-6 fw-bold mb-2"
                          : "text-danger fs-6 fw-bold mb-2"
                      }
                    >
                      {ValidatePassword?.message}
                    </div>
                  )}
                  <div className="position-relative">
                    {eye ? (
                      <input
                        className="form-control rounded-pill w-100 p-3 bg-black bg-opacity-25 border-0 my-3 text-white"
                        name="password"
                        type="text"
                        onChange={passwordChange}
                      />
                    ) : (
                      <input
                        className="form-control rounded-pill w-100 p-3 bg-black bg-opacity-25 border-0 my-3 text-white"
                        name="password"
                        type="password"
                        onChange={passwordChange}
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
                </div>
              </div>
              <div className="d-sm-flex justify-content-between mt-5">
                <label
                  htmlFor="number"
                  className="fs-5 col-md-3 col-sm-4 col-12 my-auto"
                >
                  Phone Number*
                </label>
                <div className="w-100">
                  {error?.phone_number && (
                    <div>
                      {error?.phone_number?.map((err, index) => {
                        return (
                          <div
                            className="text-danger fs-6 fw-bold mb-2"
                            key={index}
                          >
                            {err}
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {errorNumber.length > 0 && (
                    <div className="text-danger fs-6 fw-bold mb-2">
                      {errorNumber}
                    </div>
                  )}
                  <input
                    name="phone_number"
                    type="text"
                    className="form-control rounded-pill w-100 p-3 bg-black bg-opacity-25 border-0 my-3 text-white"
                    onChange={onChange}
                  />
                </div>
              </div>
              <p className="mt-3">
                (ProvidingYour Phone number is beneficial if you are a creator and
                plan on making courses on revizify)
              </p>
              <div className="w-100 d-flex justify-content-start mt-4">
                <button
                  className="col-4 background_gradient button_shadow border-0 btn rounded-pill p-3 text-light fs-5 fw-bold"
                  type="submit"
                >
                  Let&apos;s Go!!
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
      :
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
        <div className="bg-black bg-opacity-25 form_container m-4 rounded-md">
          {!isEmailValid ?

            <form
              className={errEmail ? "px-md-5 px-2 py-5 d-flex flex-column justify-content-evenly w-100 h-100 " + styles.redph : "px-md-5 px-2 py-5 d-flex flex-column justify-content-evenly w-100 h-100"}
            >
              <label
                htmlFor="email"
                className="fs-4 fw-bold col-12 text-md-start text-center mb-5"
              >
                Proceed to Login/Signup
              </label>
              <input
                className="form-control rounded-pill border-0 bg-black bg-opacity-25 p-3 mb-4 col-12 text-white redph"
                name="email"
                type="text"
                placeholder={errEmail ? errEmail : "Phone number, username or email"}
                onChange={(e) => {
                  setData(e.target.value);
                }}
                value={data}
              />


              <div className="d-flex justify-content-md-end justify-content-center">
                <button
                  onClick={emailCheck}
                  type="submit"
                  className="btn rounded-pill background_gradient button_shadow border-0 text-light col-4 p-2 fs-5 "
                >
                  <div>Proceed</div>
                </button>
              </div>
            </form>
            :
            <form
              className="px-md-5 px-2 py-5 d-flex flex-column justify-content-evenly w-100 h-100"
            >
              <label
                htmlFor="email"
                className="fs-4 fw-bold col-12 text-md-start text-center mb-5"
              >
                Hi {name}! (
                <span className="text-danger fw-light" role="button" onClick={() => (
                  setEmailValid(false)
                )}> not you? </span>
                )
              </label>
              {localError !== null ? (
                <div className="text-danger fs-6 fw-bold mb-2">{localError}</div>
              ) : (
                <></>
              )}
              <div className={error?.password? "position-relative " + styles.redph : "position-relative"}>
                <input
                  className="form-control rounded-pill border-0 bg-black bg-opacity-25 p-3 col-12 text-white"
                  name="password"
                  type={eye ? "text" : "password"}
                  placeholder={error?.password ? error.password :"Password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

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
                  onClick={loginButton}
                  type="submit"
                  className="btn rounded-pill background_gradient button_shadow border-0 text-light col-4 p-2 fs-5 mt-4"
                >
                  <div>Login</div>
                </button>
              </div>
            </form>
          }
        </div>
      </div>}
  </>
  );
};

export default LoginEmail;

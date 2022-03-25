import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/logo_border.png";
import { checkUser } from "../../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import Link from "next/link";

const LoginEmail = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState("");

  const user_exist = useSelector((state) => state.auth.user_exist);
  useEffect(() => {}, [user_exist]);

  const onClick = (e) => {
    e.preventDefault();

    dispatch(checkUser({ id: data }));

    // if (user_exist) Router.push("/loginPassword");
    // else
    //   Router.push({
    //     pathname: "/registerForm",
    //     query: { email: data },
    //   });
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
      <div className="bg-black bg-opacity-25 rounded-md m-4 form_container">
        <form
          className="px-md-5 px-2 py-5 d-flex flex-column justify-content-evenly w-100 h-100"
          onSubmit={onClick}
        >
          <label
            htmlFor="email"
            className="fs-4 fw-bold col-12 text-md-start text-center mb-5"
          >
            Proceed to LogIN
          </label>
          <input
            className="form-control rounded-pill border-0 bg-black bg-opacity-25 p-3 mb-4 col-12 text-white"
            name="email"
            type="text"
            placeholder="Phone number, username or email"
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <div className="d-flex justify-content-md-end justify-content-center">
            <button
              onClick={onClick}
              type="submit"
              className="btn rounded-pill background_gradient button_shadow border-0 text-light col-4 p-2 fs-5 "
            >
              <Link href="/loginPassword">
                <div>Proceed</div>
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginEmail;

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo_border.png";

const Register = () => {
  const [email, setEmail] = useState("");

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
        <form className="px-md-5 px-2 py-5 d-flex flex-column justify-content-evenly w-100 h-100">
          <label
            htmlFor="email"
            className="fs-4 fw-bold col-12 text-md-start text-center mb-5"
          >
            Proceed to Log In
          </label>
          <input
            className="form-control rounded-pill border-0 bg-black bg-opacity-25 p-3 mb-4 col-12 text-white"
            name="email"
            type="text"
            value={email}
            placeholder="Phone number, username or email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className="d-flex justify-content-md-end justify-content-center">
            <button
              type="submit"
              className="btn rounded-pill background_gradient button_shadow border-0 text-light col-4 p-2 fs-5 "
            >
              <Link
                href={{ pathname: "/registerForm", query: { email: email } }}
              >
                <div>Proceed</div>
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

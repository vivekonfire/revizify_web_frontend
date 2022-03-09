import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo-nav.png";

const Register = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center text-light flex-column">
      <div className="d-flex">
        <div className="px-4 m-1 py-1 bg-light bg-opacity-25 border border-2 border-light rounded-3 d-flex justify-content-center align-items-center">
          <Image src={logo} alt="Revizify Logo" />
        </div>
        <div className="d-flex flex-column align-items-center">
          <h1 className="spaced_text">Revizify</h1>
          <p>Your first step to the power of a Super memory</p>
        </div>
      </div>
      <div className="bg-black bg-opacity-25 login_container rounded-md">
        <form className="p-5 d-flex flex-column justify-content-evenly align-items-start gap-4">
          <label htmlFor="email" className="fs-4">
            Email Address
          </label>
          <input
            className="form-control border-0 rounded-pill bg-black bg-opacity-25 p-3 w-100"
            name="email"
            type="text"
            placeholder="Email Address"
          />
        </form>
        <div className="p-5 d-flex justify-content-end">
          <button
            type="submit"
            className="btn rounded-3 border-0 background_gradient button_shadow text-light float-bottom w-25"
          >
            <Link href="/registerForm">
              <div>Proceed</div>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

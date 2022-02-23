import Link from "next/link";
import React from "react";

const loginEmail = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center text-light flex-column">
      <div className="d-flex flex-column align-items-center">
        <h1 className="spaced_text">Revizify</h1>
        <p>Your first step to the power of a Super memory</p>
      </div>
      <div className="bg-black bg-opacity-50 login_container rounded-md">
        <form className="p-5 d-flex flex-column justify-content-evenly align-items-center w-100 h-100">
          <label htmlFor="email" className="fs-4">
            Email Address
          </label>
          <input
            className="form-control rounded-pill bg-black bg-opacity-25 p-3 w-100"
            name="email"
            type="text"
            placeholder="Phone number, username or email"
          />
          <button
            type="submit"
            className="btn rounded-pill bg-black text-light float-bottom w-25"
          >
            <Link href="/loginPassword">
              <div>Proceed</div>
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default loginEmail;

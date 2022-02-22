import Link from "next/link";
import React from "react";

const loginEmail = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center text-light">
      <div
        className="bg-black bg-opacity-50"
        style={{ borderRadius: "30px" }}
        p-5
      >
        <form className="m-5">
          <label htmlFor="email" className="mt-5 mx-5 mb-2">
            Email Address
          </label>
          <input
            style={{ width: "540px" }}
            className="form-control rounded-pill bg-black bg-opacity-25 p-2 mx-5 my-3"
            name="email"
            type="text"
            placeholder="Phone number, username or email"
          />
          <button
            type="submit"
            className="btn rounded-pill bg-black text-light float-end mx-5 mb-5"
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

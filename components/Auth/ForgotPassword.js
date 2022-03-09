import React from "react";

const ForgotPassword = () => {
  return (
    <div className="min-vh-100 leave_navbar text-white d-flex justify-content-center align-items-center">
      <div className="mx-2">
        <p className="fs-5 fw-bold w-100 text-center">Reset Your Password</p>
        <div className="p-5 bg-black bg-opacity-25 rounded-md shadow-3 login_container">
          <form>
            <label htmlFor="newPassword">Enter New Password</label>
            <br />
            <input
              className="input-form bg-black bg-opacity-25 border-0 rounded-pill col-12 text-white p-3"
              name="newPassword"
            />
            <br />
            <br />
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <br />
            <input
              className="input-form bg-black bg-opacity-25 border-0 rounded-pill col-12 text-white p-3"
              name="confirmPassword"
            />
            <br />
            <br />
            <button
              type="submit"
              className="button_shadow background_gradient col-3 border-0 rounded-pill text-white p-3"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

import React, { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../store/actions/authActions";
import SuccessModal from "../Layout/SuccessModal";

const ChangePassword = () => {
  const dispatch = useDispatch();

  const [eyeOld, setEyeOld] = useState(false);
  const [eyeNew, setEyeNew] = useState(false);
  const [errorOld, setErrorOld] = useState("");
  const [errorNew, setErrorNew] = useState("");
  const [errorConfirm, setErrorConfirm] = useState("");
  const error = useSelector((state) => state.auth.error);
  const change_password = useSelector((state) => state.auth.changePassword);

  const [form, setForm] = useState({
    old_password: "",
    password: "",
    password2: "",
  });

  const { old_password, password, password2 } = form;

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === "") setErrorNew("This is a required field");
    if (old_password === "") setErrorOld("This is a required field");
    if (password2 === "") setErrorConfirm("This is a required field");
    if (password !== password2) {
      setErrorConfirm("The confirm password and password do not match");
      setErrorNew("The confirm password and password do not match");
      setForm({ ...form, password: "", password2: "" });
    }
    if (password2 !== "" && password !== "" && old_password !== "")
      dispatch(changePassword(form));
  };

  return (
    <div className="min-vh-100 leave_navbar text-white d-flex justify-content-center align-items-center">
      <div className="mx-2">
        <p className="fs-3 fw-bold w-100 text-center">Reset Your Password</p>
        <div className="bg-black bg-opacity-25 rounded-md m-4 form_container">
          <form
            className="px-md-5 px-2 py-5 d-flex flex-column justify-content-evenly w-100 h-100"
            onSubmit={onSubmit}
          >
            <div className="mb-5">
              <label htmlFor="confirmPassword" className="mb-2 fs-5">
                Confirm Old Password*
              </label>
              {error?.old_password && (
                <div>
                  {error?.length > 0 ? (
                    error?.old_password?.map((err) => {
                      return (
                        <div className="text-danger fs-6 fw-bold mb-2">
                          {err}
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-danger fs-6 fw-bold mb-2">
                      {error?.old_password}
                    </div>
                  )}
                </div>
              )}
              {errorOld.length > 0 && (
                <div className="text-danger fs-6 fw-bold mb-2">{errorOld}</div>
              )}
              <div className="position-relative">
                {eyeOld ? (
                  <input
                    className="form-control rounded-pill border-0 bg-black bg-opacity-25 p-3 col-12 text-white "
                    name="old_password"
                    type="text"
                    value={old_password}
                    onChange={(e) => {
                      setForm({ ...form, old_password: e.target.value });
                    }}
                  />
                ) : (
                  <input
                    className="form-control rounded-pill border-0 bg-black bg-opacity-25 p-3 col-12 text-white"
                    name="oldpassword"
                    type="password"
                    value={old_password}
                    onChange={(e) => {
                      setForm({ ...form, old_password: e.target.value });
                    }}
                  />
                )}
                {eyeOld ? (
                  <BsFillEyeSlashFill
                    className="position-absolute top-50 end-0 mx-3 translate-middle-y pointer_cursor fs-5"
                    onClick={() => {
                      setEyeOld(!eyeOld);
                    }}
                  />
                ) : (
                  <BsFillEyeFill
                    className="position-absolute top-50 end-0 mx-3 translate-middle-y pointer_cursor fs-5"
                    onClick={() => {
                      setEyeOld(!eyeOld);
                    }}
                  />
                )}
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="newPassword" className="mb-2 fs-5">
                Enter New Password*
              </label>
              {error?.password && (
                <div>
                  {error?.length > 0 ? (
                    error?.password?.map((err) => {
                      return (
                        <div className="text-danger fs-6 fw-bold mb-2">
                          {err}
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-danger fs-6 fw-bold mb-2">
                      {error?.password}
                    </div>
                  )}
                </div>
              )}
              {errorNew.length > 0 && (
                <div className="text-danger fs-6 fw-bold mb-2">{errorNew}</div>
              )}
              <input
                className="input-form bg-black bg-opacity-25 border-0 rounded-pill col-12 text-white p-3"
                name="password"
                value={password}
                onChange={(e) => {
                  setForm({ ...form, password: e.target.value });
                }}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="confirmPassword" className="mb-2 fs-5">
                Confirm New Password*
              </label>
              {errorConfirm.length > 0 && (
                <div className="text-danger fs-6 fw-bold mb-2">
                  {errorConfirm}
                </div>
              )}
              <div className="position-relative">
                {eyeNew ? (
                  <input
                    className="form-control rounded-pill border-0 bg-black bg-opacity-25 p-3 col-12 text-white"
                    name="password2"
                    type="text"
                    value={password2}
                    onChange={(e) => {
                      setForm({ ...form, password2: e.target.value });
                    }}
                  />
                ) : (
                  <input
                    className="form-control rounded-pill border-0 bg-black bg-opacity-25 p-3 col-12 text-white"
                    name="password2"
                    type="password"
                    value={password2}
                    onChange={(e) => {
                      setForm({ ...form, password2: e.target.value });
                    }}
                  />
                )}
                {eyeNew ? (
                  <BsFillEyeSlashFill
                    className="position-absolute top-50 end-0 mx-3 translate-middle-y pointer_cursor fs-5"
                    onClick={() => {
                      setEyeNew(!eyeNew);
                    }}
                  />
                ) : (
                  <BsFillEyeFill
                    className="position-absolute top-50 end-0 mx-3 translate-middle-y pointer_cursor fs-5"
                    onClick={() => {
                      setEyeNew(!eyeNew);
                    }}
                  />
                )}
              </div>
            </div>
            <div className="d-flex justify-content-md-end justify-content-center">
              <button
                type="submit"
                className="btn rounded-pill background_gradient button_shadow border-0 text-light col-4 p-2 fs-5 "
                onClick={onSubmit}
              >
                <div>Confirm</div>
              </button>
            </div>
          </form>
        </div>
      </div>
      {change_password && <SuccessModal />}
    </div>
  );
};

export default ChangePassword;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { verifyEducator } from "../../store/actions/authActions";
import SuccessModal from "../Layout/SuccessModal";

const VerifyForm = () => {
  const dispatch = useDispatch();

  const [ques1, setQues1] = useState("");
  const [ques2, setQues2] = useState("1");
  const [ques3, setQues3] = useState("");
  const [ques4, setQues4] = useState("");
  const [ques5, setQues5] = useState("");
  const [is_experienced, setIsExperienced] = useState(false);
  const [errorQues1, setErrorQues1] = useState("");
  const [errorQues3, setErrorQues3] = useState("");
  const [errorQues4, setErrorQues4] = useState("");
  const [errorQues5, setErrorQues5] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = {
      ques1: ques1,
      ques2: ques2,
      ques3: ques3,
      ques4: ques4,
      ques5: ques5,
      is_experienced: is_experienced,
    };

    if (ques1 === "") setErrorQues1("This is a required field");
    if (ques3 === "") setErrorQues3("This is a required field");
    if (ques4 === "") setErrorQues4("This is a required field");
    if (ques5 === "") setErrorQues5("This is a required field");
    if (ques1 !== "") setErrorQues1("");
    if (ques3 !== "") setErrorQues3("");
    if (ques4 !== "") setErrorQues4("");
    if (ques5 !== "") setErrorQues5("");
    if (ques5 !== "" && ques1 !== "" && ques3 !== "" && ques4 !== "") {
      dispatch(verifyEducator(form));
      setSuccess(true);
    }
  };
  return (
    <div className="container d-flex justify-content-center flex-column p-4 text-light">
      <h1 className="mb-5 mx-xxl-5 mx-xl-0 mx-lg-5 mx-sm-0 text-center">
        Verification Form
      </h1>
      <div className="bg-black bg-opacity-25 rounded-md h-100 mx-xxl-5 mx-xl-0 mx-lg-5 mx-sm-0 p-5 shadow-lg">
        <form onSubmit={onSubmit}>
          <div className="mt-3">
            <p>What topics do you teach / Create Courses on ?*</p>
            {errorQues1.length > 0 && (
              <div className="text-danger fs-6 fw-bold mb-2">{errorQues1}</div>
            )}
            <textarea
              className="rounded-sm w-100 p-3 height_text_area bg-black bg-opacity-25 text-white border-0"
              placeholder="Enter here"
              onChange={(e) => {
                setQues1(e.target.value);
              }}
            />
          </div>
          <div className="mt-3">
            <p>How many years of experience in your field ?*</p>
            <select
              onChange={(e) => {
                setQues2(e.target.value);
              }}
              className="bg-black text-white border-0 p-2 rounded-3 bg-opacity-50"
              defaultValue={"1"}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="More than 10">More than 10</option>
            </select>
          </div>
          <div className="mt-3">
            <p>
              Links of your work ( Youtube, Instagram, Linkdin, Website,
              Research paper, others etc)*
            </p>
            {errorQues3.length > 0 && (
              <div className="text-danger fs-6 fw-bold mb-2">{errorQues3}</div>
            )}
            <textarea
              className="rounded-sm w-100 p-3 height_text_area bg-black bg-opacity-25 border-0 text-white"
              placeholder="Enter here"
              onChange={(e) => {
                setQues3(e.target.value);
              }}
            />
          </div>
          <div className="mt-3">
            <p>
              Tell us a bit about yourself. Why should you get verified? (This
              can be different from your bio)*
            </p>
            {errorQues4.length > 0 && (
              <div className="text-danger fs-6 fw-bold mb-2">{errorQues4}</div>
            )}
            <textarea
              className="rounded-sm w-100 p-3 height_text_area bg-black bg-opacity-25 border-0 text-white"
              placeholder="Enter here"
              onChange={(e) => {
                setQues4(e.target.value);
              }}
            />
          </div>
          <div className="mt-3">
            <p>Any Prior experience on creating online courses ?*</p>
            <button
              type="button"
              className={
                !is_experienced
                  ? `btn py-2 px-4 rounded-pill m-2 bg-black bg-opacity-25 text-light`
                  : `btn py-2 px-4 rounded-pill m-2 bg-black bg-opacity-100 text-light`
              }
              onClick={(e) => {
                setIsExperienced(true);
              }}
            >
              Yes
            </button>
            <button
              type="button"
              className={
                is_experienced
                  ? `btn py-2 px-4 rounded-pill m-2 bg-black bg-opacity-25 text-light`
                  : `btn py-2 px-4 rounded-pill m-2 bg-black bg-opacity-100 text-light`
              }
              onClick={(e) => {
                setIsExperienced(false);
              }}
            >
              No
            </button>
          </div>
          <div className="mt-3">
            <p>What Languages do you teach in ?*</p>
            {errorQues5.length > 0 && (
              <div className="text-danger fs-6 fw-bold mb-2">{errorQues5}</div>
            )}
            <textarea
              className="rounded-sm w-100 p-3 height_text_area bg-black bg-opacity-25 border-0 text-white"
              placeholder="Enter here"
              onChange={(e) => {
                setQues5(e.target.value);
              }}
            />
          </div>
          <div className="w-100 d-flex justify-content-center mt-4">
            <button
              className="col-6 background_gradient button_shadow border-0 rounded-pill p-3 text-light fs-4 fw-bold"
              type="submit"
              onClick={onSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {success && <SuccessModal />}
    </div>
  );
};

export default VerifyForm;

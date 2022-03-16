import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const VerifyForm = () => {
  return (
    <div className="container d-flex justify-content-center flex-column p-4 text-light ">
      <h1 className="mb-5 mx-xxl-5 mx-xl-0 mx-lg-5 mx-sm-0 text-center">
        Verification Form
      </h1>
      <div className="bg-black bg-opacity-25 rounded-md h-100 mx-xxl-5 mx-xl-0 mx-lg-5 mx-sm-0 p-5 shadow-lg">
        <form>
          <div className="mt-3">
            <p>What topics do you teach / Create Courses on ?</p>
            <textarea
              className="rounded-sm w-100 p-3 height_text_area bg-black bg-opacity-25 text-white border-0"
              placeholder="Enter here"
            />
          </div>
          <div className="mt-3">
            <p>How many years of experience in your field?</p>
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Years
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-11">More than 10</Dropdown.Item>
                <Dropdown.Item href="#/action-10">10</Dropdown.Item>
                <Dropdown.Item href="#/action-9">9</Dropdown.Item>
                <Dropdown.Item href="#/action-8">8</Dropdown.Item>
                <Dropdown.Item href="#/action-7">7</Dropdown.Item>
                <Dropdown.Item href="#/action-6">6</Dropdown.Item>
                <Dropdown.Item href="#/action-5">5</Dropdown.Item>
                <Dropdown.Item href="#/action-4">4</Dropdown.Item>
                <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                <Dropdown.Item href="#/action-1">1</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="mt-3">
            <p>
              Links of your work ( Youtube, Instagram, Linkdin, Website,
              Research paper, others etc)
            </p>
            <textarea
              className="rounded-sm w-100 p-3 height_text_area bg-black bg-opacity-25 border-0 text-white"
              placeholder="Enter here"
            />
          </div>
          <div className="mt-3">
            <p>
              Tell us a bit about yourself. Why should you get verified? (This
              can be different from your bio)
            </p>
            <textarea
              className="rounded-sm w-100 p-3 height_text_area bg-black bg-opacity-25 border-0 text-white"
              placeholder="Enter here"
            />
          </div>
          <div className="mt-3">
            <p>Any Prior experience on creating online courses?</p>
            <button className=" btn py-2 px-4 rounded-pill m-2 bg-black bg-opacity-25 text-light">
              Yes
            </button>
            <button className=" btn py-2 px-4 rounded-pill m-2 bg-black bg-opacity-25 text-light">
              No
            </button>
          </div>
          <div className="mt-3">
            <p>What Languages do you teach in ?</p>
            <textarea
              className="rounded-sm w-100 p-3 height_text_area bg-black bg-opacity-25 border-0 text-white"
              placeholder="Enter here"
            />
          </div>
          <div className="w-100 d-flex justify-content-center mt-4">
            <button
              className="col-6 background_gradient button_shadow border-0 rounded-pill p-3 text-light fs-4 fw-bold"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyForm;

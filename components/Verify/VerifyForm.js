import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const VerifyForm = () => {
  return (
    <div className="w-100 leave_navbar d-flex justify-content-center p-4 text-light">
      <div className="bg-black bg-opacity-50 rounded-md h-100 w-100 mx-5 p-5 shadow-lg">
        <form>
          <h1 className="mb-5">Verification Form</h1>
          <p className="pt-3 ">
            What topics do you teach / Create Courses on ?
          </p>
          <textarea
            className="rounded-sm w-100 p-3 height_text_area bg-black bg-opacity-25"
            placeholder="Enter here"
          />
          <p className="pt-3 ">How many years of experience in your field?</p>
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
          <p className="pt-3">
            Links of your work ( Youtube, Instagram, Linkdin, Website, Research
            paper, others etc)
          </p>
          <textarea
            className="rounded-sm w-100 p-3 height_text_area bg-black bg-opacity-25"
            placeholder="Enter here"
          />
          <p className="pt-3">
            Tell us a bit about yourself. Why should you get verified? (This can
            be different from your bio)
          </p>
          <textarea
            className="rounded-sm w-100 p-3 height_text_area bg-black bg-opacity-25"
            placeholder="Enter here"
          />
          <p className="pt-3">
            Any Prior experience on creating online courses?
          </p>
          <button className=" btn py-2 px-4 rounded-pill m-2 bg-black text-light">
            Yes
          </button>
          <button className=" btn py-2 px-4 rounded-pill m-2 bg-black text-light">
            No
          </button>
          <p className="pt-3">What Languages do you teach in ?</p>
          <textarea
            className="rounded-sm w-100 p-3 height_text_area bg-black bg-opacity-25"
            placeholder="Enter here"
          />
          <div className="w-100 d-flex justify-content-center mt-4">
            <button
              className="w-50 bg-black btn rounded-pill p-3 text-light"
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

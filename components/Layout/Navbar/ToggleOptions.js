import React from "react";
import { BiHomeAlt, BiCheckboxChecked } from "react-icons/bi";
import { MdOutlineCreate } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";
import Link from "next/link";

const ToggleOptions = ({ setToggle }) => {
  return (
    <div
      className="position-fixed start-0 top-0 z-9 min-vh-100 min-vw-100 bg-black bg-opacity-75"
      onClick={() => {
        setToggle(false);
      }}
    >
      <div
        className="background_gradient rounded-sm position-absolute top-0 start-0 mx-4 overflow-hidden z-10"
        style={{
          marginTop: "6rem",
          width: "350px",
          height: "465px",
        }}
      >
        <ul className="my-3 p-0 mx-4">
          <li>
            <Link href="/">
              <div className="py-3 d-flex align-items-center pointer_cursor">
                <div className="me-3 d-flex align-items-center">
                  <BiHomeAlt alt="Home image" className="pointer_cursor fs-3" />
                </div>
                <div className="fs-6">Home</div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/create">
              <div className="py-3 d-flex align-items-center pointer_cursor">
                <div className="me-3 d-flex align-items-center">
                  <MdOutlineCreate
                    alt="Create image"
                    className="pointer_cursor fs-3"
                  />
                </div>
                <div className="fs-6">Create</div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/download">
              <div className="py-3 d-flex align-items-center pointer_cursor">
                <div className="me-3 d-flex align-items-center">
                  <AiOutlineDownload
                    alt="download image"
                    className="pointer_cursor fs-3"
                  />
                </div>
                <div className="fs-6">Download</div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/verify">
              <div className="py-3 d-flex align-items-center pointer_cursor">
                <div className="me-3 d-flex align-items-center">
                  <BiCheckboxChecked
                    alt="Verify image"
                    className="pointer_cursor fs-3"
                  />
                </div>
                <div className="fs-6">Verify As Educator</div>
              </div>
            </Link>
          </li>
        </ul>
        <div className="border-bottom border-bottom-2 border-white mt-4 mx-4" />
        <div className="d-flex mt-5 mx-5 justify-content-between">
          <div>About Us</div>
          <div>Terms</div>
        </div>
        <div className="d-flex justify-content-between mt-5 mx-5">
          <div>Contact Us</div>
          <div>FAQ</div>
        </div>
      </div>
    </div>
  );
};

export default ToggleOptions;

import React from "react";
import Image from "next/image";
import image from "../../public/unsplash_ucUB9wxkPgY.png";
import profileImage from "../../public/unsplash_tAvpDE7fXgY.png";
import { BsThreeDots, BsHandThumbsUp } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaShareAlt } from "react-icons/fa";

const EachCourse = () => {
  return (
    <div
      className="col d-flex justify-content-center my-3"
      style={{ height: "395px", width: "372px" }}
    >
      <div
        className="w-100 bg-black bg-opacity-75 p-3 d-flex flex-column justify-content-between"
        style={{ borderRadius: "30px" }}
      >
        <Image src={image} alt="course image" />
        <div className="fs-6 m-2">
          Pariatur cillum sit sunt sint sit deserunt nisi consectetur ipsum.
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-evenly align-items-center">
            <Image src={profileImage} alt="profile image" />
            <p className="small_text">Shahi Shekhar</p>
          </div>
          <p className="small_text">Published - 17/09/22</p>
        </div>
        <div className="d-flex justify-content-around">
          <div className="d-flex justify-content-center align-items-center bg-black rounded-circle course_option">
            <FaShareAlt />
          </div>
          <div className="d-flex justify-content-center align-items-center  rounded-circle course_option">
            <BsHandThumbsUp />
          </div>
          <div className="d-flex justify-content-center align-items-center  rounded-circle course_option">
            <HiDownload />
          </div>
          <div className="d-flex justify-content-center align-items-center  rounded-circle course_option">
            <BsThreeDots />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachCourse;

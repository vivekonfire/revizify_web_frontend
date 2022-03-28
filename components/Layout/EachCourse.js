import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import image from "../../public/unsplash_ucUB9wxkPgY.png";
import profileImage from "../../public/unsplash_tAvpDE7fXgY.png";
import { BsThreeDots, BsHandThumbsUp, BsLightningFill } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaShareAlt } from "react-icons/fa";
import cards from "../../public/cards.svg";
import { MoreOption } from "./EachCourse/MoreOptions";

const EachCourse = ({ keey, course, name }) => {
  const [moreOption, setMoreOption] = useState(false);

  const Loader = ({ src }) => {
    return `https://picsum.photos/300/200?random=${src}`;
  };

  const myLoader = ({ src, width, quality }) => {
    return `https://picsum.photos/${width}/200?random=${src}`;
  };

  const {
    course_name,
    course_img,
    num_of_downloads,
    num_of_likes,
    num_of_cards,
    created_at,
  } = course;

  return (
    <Link href="/viewCourse">
      <div
        className="col d-flex justify-content-center my-3 pointer_cursor"
        style={{ height: "395px", width: "372px" }}
      >
        <div className="w-100 bg-black bg-opacity-50 p-3 d-flex flex-column justify-content-between rounded-md">
          <div className="position-relative">
            <div className="d-flex justify-content-center items-align-center">
              <Image
                loader={myLoader}
                src={keey}
                alt="Picture of the author"
                width={330}
                height={200}
                className="rounded-md"
              />
            </div>
            <div className=""></div>
            <div className="bg-black bg-opacity-75 p-2 rounded-pill gap-2 d-flex align-items-center position-absolute bottom-0 start-0 mx-2 my-3">
              <BsLightningFill />
              <p className="p-0 m-0">100</p>
            </div>
            <div className="bg-black bg-opacity-75 p-2 rounded-pill gap-2 d-flex align-items-center position-absolute bottom-0 end-0 mx-2 my-3">
              <div className="d-flex align-items-center justify-content-center">
                <Image src={cards} alt="Image of cards" />
              </div>
              <p className="p-0 m-0">{num_of_cards}</p>
            </div>
          </div>
          <div className="fs-6 m-2">{course_name}</div>
          <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-evenly align-items-center">
              <Image src={profileImage} alt="profile image" />
              <Link href="/profile">
                <p className="small_text pointer_cursor">{name}</p>
              </Link>
            </div>
            <p className="small_text my-auto">Published - {created_at}</p>
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
            <div
              className="d-flex justify-content-center align-items-center  rounded-circle course_option"
              onClick={() => {
                setMoreOption(true);
              }}
            >
              <BsThreeDots />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EachCourse;

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BsThreeDots,
  BsHandThumbsUp,
  BsHandThumbsUpFill,
  BsLightningFill,
} from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaShareAlt, FaUserCircle } from "react-icons/fa";
import cards from "../../public/cards.svg";
import MoreOption from "./EachCourse/MoreOptions";
import { likeCourse, removeLikeCourse } from "../../store/actions/courseAction";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";

const EachCourse = ({ keey, course, name, show }) => {
  const [moreOption, setMoreOption] = useState(false);
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.valid_token);

  const myLoader = ({ src, width, quality }) => {
    return `${src}`;
  };

  const {
    course_id,
    course_name,
    num_of_downloads,
    num_of_cards,
    num_of_likes,
    is_downloaded,
    created_at,
    user_name,
  } = course;

  const userName = Cookies.get("userName");

  let courseLink = ``;

  if ((name === userName || user_name === userName) && isLogin)
    courseLink = `createrCourse`;
  else courseLink = `viewCourse`;

  const likeClick = async () => {
    if (isLogin) {
      if (!like) {
        await dispatch(likeCourse(course_id));
      } else {
        await dispatch(removeLikeCourse(course_id));
      }
      loader();
    }
  };

  const loader = async () => {
    const token = Cookies.get("token");

    const headers = {
      Authorization: `JWT ${token}`,
    };
    const res = await axios.get(
      `https://data.revizify.com/api/v1/courses/like?course_id=${course_id}`,
      { headers }
    );

    setLikeCount(res.data.count);

    if (res.data.like === 1) setLike(true);
    else setLike(false);
  };

  useEffect(() => {
    if (isLogin) {
      loader();
    }
  }, [course_id]);

  return (
    <Link href={`/${courseLink}?id=${course_id}`}>
      <div
        className="col d-flex justify-content-center my-3 pointer_cursor position-relative px-4 col-md-6 col-lg-4 col-xl-3 col-12"
      // style={{ "max-height": "395px" }}
      >
        <div className="w-100 bg-black bg-opacity-50 p-3 d-flex flex-column justify-content-between rounded-md">
          <div className="position-relative">
            <div className="d-flex justify-content-center items-align-center">
              <Image
                loader={myLoader}
                src={keey}
                alt={course.course_name}
                width={400}
                height={200}
                className="rounded-md"
              />
            </div>
            <div className=""></div>
            <div className="bg-black bg-opacity-75 p-2 rounded-pill gap-2 d-flex align-items-center position-absolute bottom-0 end-0 mx-2 my-3">
              <div className="d-flex align-items-center justify-content-center">
                <Image src={cards} alt="Image of cards" />
              </div>
              <p className="p-0 m-0">{num_of_cards}</p>
            </div>
          </div>
          <h2 className="fs-6 my-3">{course_name}</h2>
          <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-evenly align-items-center my-2">
              <FaUserCircle className="fs-5" />

              <Link href={`/profile?name=${user_name}`}>
                <p className="small_text pointer_cursor">{user_name}</p>
              </Link>

            </div>
            {created_at !== undefined && (
              <p className="small_text my-auto">Published - {created_at}</p>
            )}
          </div>
          <div className="d-flex justify-content-around">
            <div className="d-flex justify-content-center align-items-center bg-black rounded-circle course_option">
              <FaShareAlt />
            </div>
            <div
              className="d-flex justify-content-center align-items-center  rounded-circle course_option"
              onClick={(e) => {
                likeClick();
                e.stopPropagation();
              }}
            >
              {like === false ? <BsHandThumbsUp /> : <BsHandThumbsUpFill />}{likeCount}
            </div>
            <div className="d-flex justify-content-center align-items-center  rounded-circle course_option">
              <HiDownload />
              {num_of_downloads}
            </div>
            {show && (
              <div
                className="d-flex justify-content-center align-items-center rounded-circle course_option z-10"
                onClick={(e) => {
                  setMoreOption(!moreOption);
                  e.stopPropagation();
                }}
              >
                <BsThreeDots />
              </div>
            )}
            {moreOption && <MoreOption course_id={course_id} />}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EachCourse;

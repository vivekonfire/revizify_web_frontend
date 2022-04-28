import React, { useEffect } from "react";
import Image from "next/image";
import Video from "../../public/video.png";
import tick from "../../public/tick.svg";
import cross from "../../public/cross.svg";
import image from "../../public/unsplash_ucUB9wxkPgY.png";
import profileImage from "../../public/unsplash_tAvpDE7fXgY.png";
import styles from "../../styles/Cards.module.css";

import {
  BsBookmark,
  BsBookmarkFill,
  BsHandThumbsUp,
  BsHandThumbsUpFill,
  BsLightningFill,
  BsThreeDots,
} from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaShareAlt } from "react-icons/fa";
import cards from "../../public/cards.svg";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  downloadCourse,
  getCourse,
  getLikeCourse,
  likeCourse,
  removeLikeCourse,
} from "../../store/actions/courseAction";
import { deckStatus, readCard, getCards } from "../../store/actions/cardAction";
import DownloadCards from "./DownloadCards";
import { Card } from "react-bootstrap";







const Deck = ({ name, energy, card, display, keey }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  let form;

  const changeCard = () => {
    if (display === false) {
      form = {
        course_id: router.query.id,
      };
    } else {
      form = {
        deck_status: keey,
        course_id: router.query.id,
      };
    }

    dispatch(getCards(form));
  };
  return (
    <div
      className="col-3 p-3 bg-black bg-opacity-50 rounded-sm m-1 pointer_cursor "
      style={{ height: "115px", minWidth: "165px", width: "165px" }}
      onClick={changeCard}
    >
      <h6 className="text-center ">{name}</h6>
      {display !== false && (
        <div className="d-flex justify-content-evenly align-items-center my-3">
          <div className="w-100">
            <BsLightningFill />
            {energy}
          </div>
          <div className="w-100">
            <Image src={cards} alt="Image of cards" />
            {card}
          </div>
        </div>
      )}
    </div>
  );
};



const CourseDetails = ({ cards_ }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.valid_token);

  const course = useSelector((state) => state.course.course);
  const deck = useSelector((state) => state.card.deck);
  const card = useSelector((state) => state.card.card);
  const like = useSelector((state) => state.course.like);
  // const bookmark = useSelector((state) => state.card.bookmark);

  const DownloadClick = (e) => {
    e.preventDefault();

    const form = {
      course_id: router.query.id,
    };

    dispatch(downloadCourse(form));
  };

  // const bookmarkClick = (e) => {
  //   e.preventDefault();

  //   const form = {
  //     course_id: router.query.id,
  //     card_id: card?.card_id,
  //   };

  //   if (bookmark) dispatch(deleteBookmark(form));
  //   else dispatch(setBookmark(form));
  // };


  const tickClick = (e) => {
    e.preventDefault();

    const form = {
      course_id: router.query.id,
      card_id: card?.card_id,
    };

    dispatch(readCard(form));
  };

  const likeClick = async () => {
    if (like === 1) await dispatch(removeLikeCourse(router.query.id));
    else await dispatch(likeCourse(router.query.id));

    await dispatch(getLikeCourse(router.query.id));
  };

  useEffect(() => {
    if (router.query.id !== undefined) {
      dispatch(getCourse(router.query.id));
      dispatch(deckStatus(router.query.id));
      dispatch(getLikeCourse(router.query.id));
    }
  }, [router.query.id]);

  return (
    <div className="leave_navbar min-vh-100 text-white  gap-5 mx-5 row">
   
   
   
   
      <div className="col-xl-7 col-12 me-5 text-white">
        <p className="fs-5 fw-bold">{card?.title}</p>
        <Image src={card ? card.video ? card.video : Video : Video} alt="Video image" className="w-100" />

        <div className="d-flex justify-content-center gap-4 my-3">
          <div
            className="rounded-circle p-4 text-success fs-6 bg-success bg-opacity-25 d-flex justify-content-center align-items-center shadow-lg pointer_cursor"
            onClick={tickClick}
          >
            <Image src={tick} alt="tick image" width="36px" height="36px" />
          </div>
          <div className="rounded-circle p-4 text-danger bg-danger bg-opacity-25 d-flex justify-content-center align-items-center shadow-lg pointer_cursor">
            <Image src={cross} alt="cross image" />
          </div>
        </div>
        <div className="d-xxl-flex ">
          <div className="w-100 p-2 d-flex justify-content-center">
            <div
              className="col d-flex justify-content-center my-3"
              style={{
                minHeight: "153px",
                minWidth: "339px",
                maxWidth: "518px",
              }}
            >
              <div className="w-100 bg-black bg-opacity-50 p-3 d-flex flex-column justify-content-between rounded-sm">
                <div className="d-flex">
                  <div className="col-5">
                    <Image src={image} alt="course image" />
                  </div>
                  <div>
                    <div className="fs-6 m-2 fw-bold">{course?.course_name}</div>
                    <div className="fs-6 m-2 text-secondary">
                      {course?.course_desc}
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <Link href={`/profile?name=${course?.user_name}`}>
                    <div className="d-flex justify-content-evenly align-items-center mt-3 pointer_cursor">
                      <Image src={profileImage} alt="profile image" />
                      <p className="small_text">{course?.user_name}</p>
                    </div>
                  </Link>
                </div>
                <div className="d-flex justify-content-around">
                  <div className="d-flex justify-content-center align-items-center rounded-circle course_option bg-black">
                    <FaShareAlt />
                  </div>
                  <div className="d-flex justify-content-evenly align-items-center course_option w-25">
                    <Image src={cards} alt="Image of cards" />
                    {course?.num_of_cards}
                  </div>
                  <div className="d-flex justify-content-evenly align-items-center  rounded-circle course_option">
                    <HiDownload /> {course?.num_of_downloads}
                  </div>
                  {like ? (
                    <button
                      className="btn background_gradient button_shadow rounded-pill text-white h-100 border-0"
                      onClick={likeClick}
                    >
                      <BsHandThumbsUpFill />
                    </button>
                  ) : (
                    <button
                      className="btn background_gradient button_shadow rounded-pill text-white h-100 border-0"
                      onClick={likeClick}
                    >
                      <BsHandThumbsUp />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 p-2 row row-cols-3 my-3 justify-content-center">
            <Deck
              name={"NEW"}
              energy={deck?.revision0Percantage}
              card={deck?.revision0}
              keey={0}
            />
            <Deck
              name={"1st Revision"}
              energy={deck?.revision1Percantage}
              card={deck?.revision1}
              keey={1}
            />
            <Deck
              name={"2nd Revision"}
              energy={deck?.revision2Percantage}
              card={deck?.revision2}
              keey={2}
            />
            <Deck
              name={"3rd Revision"}
              energy={deck?.revision3Percantage}
              card={deck?.revision3}
              keey={3}
            />
            <Deck
              name={"4th Revision"}
              energy={deck?.revision4Percantage}
              card={deck?.revision4}
              keey={4}
            />
            <Deck name={"View all cards"} display={false} />
          </div>
        </div>
      </div>


      <div
        className="col-xl-4 col-lg-6 col-md-9 col-12 text-white mx-auto"
        id="card"
      >
        <div className="d-flex justify-content-end align-items-center gap-5">
          {isLogin ? (
            <button
              className="btn rounded-pill col-4 background_gradient button_shadow p-2 text-light d-flex justify-content-evenly align-items-center border-0"
              onClick={DownloadClick}
            >
              <HiDownload />
              Download
            </button>
          ) : (
            <Link href="/loginEmail">
              <button className="btn rounded-pill col-4 background_gradient button_shadow p-2 text-light d-flex justify-content-evenly align-items-center border-0">
                <HiDownload />
                Download
              </button>
            </Link>
          )}
          {/* {bookmark ? (
            <BsBookmarkFill onClick={bookmarkClick} />
          ) : (
            <BsBookmark onClick={bookmarkClick} />
          )} */}
          <BsThreeDots />
        </div>
        <div className={`${styles.view_card_container} my-4 mx-2 overflow-auto`}>
          {cards_?.count > 0 &&
            cards_?.results?.map((card) => {
              return <Card card={card} key={card.card_id} />;
            })}
        </div>


      </div>
    
    
    
    </div>
  );
};

export default CourseDetails;

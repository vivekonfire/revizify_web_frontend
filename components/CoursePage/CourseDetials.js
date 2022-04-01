import React, { useEffect } from "react";
import Image from "next/image";
import Video from "../../public/video.png";
import tick from "../../public/tick.svg";
import cross from "../../public/cross.svg";
import image from "../../public/unsplash_ucUB9wxkPgY.png";
import profileImage from "../../public/unsplash_tAvpDE7fXgY.png";
import {
  BsHandThumbsUp,
  BsHandThumbsUpFill,
  BsLightningFill,
} from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaShareAlt } from "react-icons/fa";
import cards from "../../public/cards.svg";
// import Cards from "./Cards";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getCourse } from "../../store/actions/courseAction";
import { deckStatus, readCard, getCards } from "../../store/actions/cardAction";

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

const CourseDetials = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const course = useSelector((state) => state.course.course);
  const deck = useSelector((state) => state.card.deck);
  const card = useSelector((state) => state.card.card);

  const tickClick = (e) => {
    e.preventDefault();

    const form = {
      course_id: router.query.id,
      card_id: card?.card_id,
    };

    dispatch(readCard(form));
  };

  useEffect(() => {
    if (router.query.id !== undefined) {
      dispatch(getCourse(router.query.id));
      dispatch(deckStatus(router.query.id));
    }
  }, [router.query.id]);

  const {
    course_id,
    course_name,
    course_desc,
    user_id,
    course_img,
    num_of_downloads,
    num_of_likes,
    num_of_cards,
    user_name,
    user_pic,
  } = course;

  return (
    <div className="col-xl-7 col-12 me-5 text-white">
      <p className="fs-5 fw-bold">{card?.title}</p>
      <Image src={Video} alt="Video image" className="w-100" />

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
              maxHeight: "246px",
            }}
          >
            <div className="w-100 bg-black bg-opacity-50 p-3 d-flex flex-column justify-content-between rounded-sm">
              <div className="d-flex">
                <div className="col-5">
                  <Image src={image} alt="course image" />
                </div>
                <div>
                  <div className="fs-6 m-2 fw-bold">{course_name}</div>
                  <div className="fs-6 m-2 text-secondary">{course_desc}</div>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <Link href={`/profile?name=${user_name}`}>
                  <div className="d-flex justify-content-evenly align-items-center mt-3 pointer_cursor">
                    <Image src={profileImage} alt="profile image" />
                    <p className="small_text">{user_name}</p>
                  </div>
                </Link>
              </div>
              <div className="d-flex justify-content-around">
                <div className="d-flex justify-content-center align-items-center rounded-circle course_option bg-black">
                  <FaShareAlt />
                </div>
                <div className="d-flex justify-content-evenly align-items-center course_option w-25">
                  <Image src={cards} alt="Image of cards" />
                  {num_of_cards}
                </div>
                <div className="d-flex justify-content-evenly align-items-center  rounded-circle course_option">
                  <HiDownload /> {num_of_downloads}
                </div>
                <div className="d-flex justify-content-between ps-4 align-items-center  rounded-pill course_option bg-black w-25">
                  <BsHandThumbsUpFill />
                  <button className="btn background_gradient button_shadow rounded-pill text-white h-100 border-0">
                    Like
                  </button>
                </div>
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
  );
};

export default CourseDetials;

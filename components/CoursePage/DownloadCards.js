import React, { useEffect } from "react";
import { BsThreeDots, BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import styles from "../../styles/Cards.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { downloadCourse } from "../../store/actions/courseAction";
import { getCard } from "../../store/actions/cardAction";
import {
  getBookmark,
  setBookmark,
  deleteBookmark,
} from "../../store/actions/cardAction";

const Card = ({ card }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const cardSelect = () => {
    const form = {
      course_id: router.query.id,
      card_id: card.card_id,
    };

    dispatch(getCard(form));
  };

  return (
    <div
      className="col-11 rounded-3 bg-black bg-opacity-50 my-2 p-2 d-flex justify-content-between align-items-center pointer_cursor"
      onClick={cardSelect}
    >
      {card?.title}
    </div>
  );
};

const DownloadCards = ({ cards }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const card = useSelector((state) => state.card.card);
  const bookmark = useSelector((state) => state.card.bookmark);

  const DownloadClick = (e) => {
    e.preventDefault();

    const form = {
      course_id: router.query.id,
    };

    dispatch(downloadCourse(form));
  };

  const bookmarkClick = (e) => {
    e.preventDefault();

    const form = {
      course_id: router.query.id,
      card_id: card?.card_id,
    };

    if (bookmark) dispatch(deleteBookmark(form));
    else dispatch(setBookmark(form));
  };

  useEffect(() => {
    let elementId = document.getElementById("card");

    document.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        elementId.classList.remove(`${styles.is_sticky}`);
      } else {
        elementId.classList.add(`${styles.is_sticky}`);
      }
    });
    window.scrollTo(0, 0);

    if (router.query.id !== undefined)
      dispatch(getBookmark(router.query.id, card?.card_id));
  }, [router.query.id, card]);

  return (
    <div
      className="col-xl-4 col-lg-6 col-md-9 col-12 text-white mx-auto"
      id="card"
    >
      <div className="d-flex justify-content-end align-items-center gap-5">
        <button
          className="btn rounded-pill col-4 background_gradient button_shadow p-2 text-light d-flex justify-content-evenly align-items-center border-0"
          onClick={DownloadClick}
        >
          <HiDownload />
          Download
        </button>
        {bookmark ? (
          <BsBookmarkFill onClick={bookmarkClick} />
        ) : (
          <BsBookmark onClick={bookmarkClick} />
        )}
        <BsThreeDots />
      </div>
      <div className="my-4 mx-2 overflow-auto" style={{ height: "700px" }}>
        {cards?.count > 0 &&
          cards?.results?.map((card) => {
            return <Card card={card} key={card.card_id} />;
          })}
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    </div>
  );
};

export default DownloadCards;

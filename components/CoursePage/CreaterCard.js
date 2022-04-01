import React, { useState, useEffect } from "react";
import {
  BsThreeDots,
  BsBookmark,
  BsBookmarkFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import styles from "../../styles/Cards.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  getBookmark,
  setBookmark,
  deleteBookmark,
} from "../../store/actions/cardAction";
import { getCard } from "../../store/actions/cardAction";
import CardMoreOptions from "./CardMoreOptions";

const Card = ({ card, setUpdateModal, setUpdateCardId }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [moreOption, setMoreOption] = useState(false);

  const cardSelect = () => {
    const form = {
      course_id: router.query.id,
      card_id: card.card_id,
    };

    dispatch(getCard(form));
  };

  return (
    <div
      className="col-11 rounded-3 bg-black bg-opacity-50 my-2 p-2 d-flex justify-content-between align-items-center pointer_cursor position-relative "
      // onClick={cardSelect}
    >
      {card?.title}
      <div
        className="d-flex justify-content-center align-items-center rounded-circle course_option z-10"
        onClick={() => {
          setMoreOption(!moreOption);
        }}
      >
        <BsThreeDotsVertical />
      </div>
      {moreOption && (
        <CardMoreOptions
          card_id={card.card_id}
          setUpdateModal={setUpdateModal}
          setMoreOption={setMoreOption}
          setUpdateCardId={setUpdateCardId}
        />
      )}
    </div>
  );
};

const CreaterCard = ({ setModal, cards, setUpdateModal, setUpdateCardId }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const card = useSelector((state) => state.card.card);
  const bookmark = useSelector((state) => state.card.bookmark);

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
          type="button"
          className="btn rounded-pill col-4 background_gradient button_shadow p-2 text-light d-flex justify-content-evenly align-items-center border-0"
          onClick={() => {
            setModal(true);
          }}
        >
          + Add New Card
        </button>
        {bookmark ? (
          <BsBookmarkFill onClick={bookmarkClick} />
        ) : (
          <BsBookmark onClick={bookmarkClick} />
        )}
        <BsThreeDots />
      </div>
      <div className="my-4 mx-2 py-4 overflow-auto" style={{ height: "600px" }}>
        {cards?.count > 0 &&
          cards?.results?.map((card) => {
            return (
              <Card
                card={card}
                key={card.card_id}
                setUpdateModal={setUpdateModal}
                setUpdateCardId={setUpdateCardId}
              />
            );
          })}
      </div>
      <button className="background_gradient button_shadow rounded-pill border-0 px-5 py-3 fs-3 fw-bold text-white text-center col-12">
        Publish
      </button>
    </div>
  );
};

export default CreaterCard;

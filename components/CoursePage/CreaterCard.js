import React, { useEffect } from "react";
import { BsThreeDots, BsBookmark, BsThreeDotsVertical } from "react-icons/bs";
import styles from "../../styles/Cards.module.css";
import { useDispatch } from "react-redux";
import { checkBookmarked } from "../../store/actions/courseAction";
const Card = () => {
  return (
    <div className="col-11 rounded-3 bg-black bg-opacity-50 my-2 p-2 d-flex justify-content-between align-items-center">
      Card
      <BsThreeDotsVertical />
    </div>
  );
};

const CreaterCard = ({ modal, setModal }) => {
  const dispatch = useDispatch();

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

    dispatch(checkBookmarked());
  });

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
            setModal(!modal);
          }}
        >
          + Add New Card
        </button>
        <BsBookmark />
        <BsThreeDots />
      </div>
      <div className="my-4 mx-2 overflow-auto" style={{ height: "600px" }}>
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
        <Card />
        <Card />
      </div>
      <button className="background_gradient button_shadow rounded-pill border-0 px-5 py-3 fs-3 fw-bold text-white text-center col-12">
        Publish
      </button>
    </div>
  );
};

export default CreaterCard;

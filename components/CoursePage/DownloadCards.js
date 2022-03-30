import React, { useEffect } from "react";
import { BsThreeDots, BsBookmark, BsThreeDotsVertical } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import styles from "../../styles/Cards.module.css";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { downloadCourse } from "../../store/actions/courseAction";

const Card = () => {
  return (
    <div className="col-11 rounded-3 bg-black bg-opacity-50 my-2 p-2 d-flex justify-content-between align-items-center">
      Card
      <BsThreeDotsVertical />
    </div>
  );
};

const DownloadCards = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const DownloadClick = (e) => {
    e.preventDefault();

    const form = {
      course_id: router.query.id,
    };

    dispatch(downloadCourse(form));
  };

  useEffect(() => {
    let elementId = document.getElementById("card");
    console.log(elementId);
    document.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        elementId.classList.remove(`${styles.is_sticky}`);
      } else {
        elementId.classList.add(`${styles.is_sticky}`);
      }
    });
    window.scrollTo(0, 0);
  });

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
        <BsBookmark />
        <BsThreeDots />
      </div>
      <div className="my-4 mx-2 overflow-auto" style={{ height: "700px" }}>
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
    </div>
  );
};

export default DownloadCards;

import React from "react";
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
import Cards from "./Cards";

const Deck = ({ name, energy, card, display }) => {
  console.log(card);
  return (
    <div
      onClick={() => {
        return <Cards name={name} />;
      }}
      className="col-3 p-3 bg-black bg-opacity-50 rounded-sm m-1 pointer_cursor"
      style={{ height: "115px", minWidth: "165px", width: "165px" }}
    >
      <h6 className="text-center">{name}</h6>
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
  return (
    <div className="col-xl-8 col-12 me-5 text-white">
      <div className="fs-5 fw-bold">
        Eu et officia eiusmod commodo exercitation occaecat ad anim ipsum.
        Aliquip quis ut reprehenderit aliquip commodo in laboris sunt fugiat non
        non. Anim aliquip fugiat est sunt. Labore est veniam nostrud dolore.
        Cillum do in eiusmod fugiat cupidatat labore aliqua non.
      </div>
      <Image src={Video} alt="Video image" />
      <div className="d-flex justify-content-center gap-4 my-3">
        <div className="rounded-circle p-4 text-success fs-6 bg-success bg-opacity-25 d-flex justify-content-center align-items-center shadow-lg">
          <Image src={tick} alt="tick image" width="36px" height="36px" />
        </div>
        <div className="rounded-circle p-4 text-danger bg-danger bg-opacity-25 d-flex justify-content-center align-items-center shadow-lg">
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
                <Image src={image} alt="course image" />
                <div>
                  <div className="fs-6 m-2 fw-bold">Pariatur cillum sit</div>
                  <div className="fs-6 m-2 text-secondary">
                    Pariatur cillum sit sunt sint sit deserunt nisi consectetur
                    ipsum.
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-evenly align-items-center mt-3">
                  <Image src={profileImage} alt="profile image" />
                  <p className="small_text">Shahi Shekhar</p>
                </div>
              </div>
              <div className="d-flex justify-content-around">
                <div className="d-flex justify-content-center align-items-center rounded-circle course_option bg-black">
                  <FaShareAlt />
                </div>
                <div className="d-flex justify-content-evenly align-items-center course_option w-25">
                  <Image src={cards} alt="Image of cards" />
                  60/100
                </div>
                <div className="d-flex justify-content-evenly align-items-center  rounded-circle course_option">
                  <HiDownload /> 200
                </div>
                <div className="d-flex justify-content-between ps-4 align-items-center  rounded-pill course_option bg-black w-25">
                  <BsHandThumbsUpFill />
                  <button className="btn background_gradient button_shadow rounded-pill text-white h-100">
                    Like
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 p-2 row row-cols-3 my-3 justify-content-center">
          <Deck name={"NEW"} energy="100" card="100" />
          <Deck name={"1st Revision"} energy="100" card="100" />
          <Deck name={"2nd Revision"} energy="100" card="100" />
          <Deck name={"3rd Revision"} energy="100" card="100" />
          <Deck name={"4th Revision"} energy="100" card="100" />
          <Deck name={"View all cards"} display={false} />
        </div>
      </div>
    </div>
  );
};

export default CourseDetials;
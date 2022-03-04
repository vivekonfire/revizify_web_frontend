import React from "react";
import { BsThreeDots, BsBookmark, BsThreeDotsVertical } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

const Card = () => {
  return (
    <div className="col-11 rounded-3 bg-black bg-opacity-50 my-2 p-2 d-flex justify-content-between align-items-center">
      Card
      <BsThreeDotsVertical />
    </div>
  );
};

const Cards = () => {
  return (
    <div className="col-3 text-white">
      <div className="d-flex justify-content-end align-items-center gap-5">
        <button className="btn rounded-pill col-4 background_gradient button_shadow p-2 text-light d-flex justify-content-evenly align-items-center">
          <HiDownload />
          Download
        </button>
        <BsBookmark />
        <BsThreeDots />
      </div>
      <div className="my-4 mx-2 overflow-auto" style={{ height: "1000px" }}>
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

export default Cards;

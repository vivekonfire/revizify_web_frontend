import React from "react";
import Image from "next/image";
import videoimg from "../../public/video-bg.png";
import videoplay from "../../public/pngwing.png";
import bulbimg from "../../public/Paid-idea-cuate-1.png";

const BelowBanner = () => {
  return (
    <div style={{ marginBottom: "150px" }} className="text-light ">
      <div className="d-md-flex w-100 p-5 justify-content-between background_gradient_reverse row m-0">
        <div className="col-md-6 my-3 d-md-flex flex-column justify-content-evenly">
          <h1>You Forget 80% of what you studying a week!</h1>
          <h3>
            Revizify revision system helps you remember everything you study.
          </h3>
        </div>
        <Image src={videoimg} alt="video content" />
      </div>
      <div className="d-md-flex w-100 px-5 justify-content-between row">
        <Image src={bulbimg} alt="image for ideas" />
        <div className="col-md-6 my-3 d-flex flex-column justify-content-evenly">
          <h1>Monetise your courses if it crosses 500 downloads!</h1>
          <button
            type="button"
            className="btn p-3 rounded-pill text-light background_gradient_reverse button_shadow fs-4 col-6 m-0"
          >
            Get Verified as Educator
          </button>
        </div>
      </div>
      <div className="d-md-flex w-100 px-5 justify-content-between background_gradient_reverse row m-0">
        <div className="col-md-6 my-3 d-flex flex-column justify-content-evenly ">
          <h1>Download or make flash card bases revision courses!</h1>
          <h3>Add texts, images, audio notes or video as per requirement</h3>
        </div>
        <Image src={videoplay} alt="image for play video" />
      </div>
    </div>
  );
};

export default BelowBanner;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import videoimg from "../../public/video-bg.png";
import videoplay from "../../public/pngwing.png";
import bulbimg from "../../public/Paid-idea-cuate-1.png";

const BelowBanner = () => {
  return (
    <div style={{ marginBottom: "150px" }} className="text-light ">
      <div className="d-md-flex w-100 p-5 justify-content-between background_gradient_reverse m-0">
        <div className="col-lg-6 col-12 my-3 d-lg-flex flex-column justify-content-lg-evenly text-lg-start text-center">
          <h1>You Forget 80% of what you studying a week!</h1>
          <h3>
            Revizify revision system helps you remember everything you study.
          </h3>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <Image src={videoimg} alt="video content" />
        </div>
      </div>
      <div className="d-lg-flex w-100 px-5 justify-content-lg-between my-5 my-lg-0">
        <div className="d-flex justify-content-center align-items-center">
          <Image src={bulbimg} alt="image for ideas" />
        </div>
        <div className="col-lg-6 col-12 my-3 d-flex flex-column justify-content-lg-evenly justify-content-center">
          <h1 className="text-lg-start text-center">
            Monetise your courses if it crosses 500 downloads!
          </h1>
          <Link href="/verify">
            <button
              type="button"
              className="btn p-3 rounded-pill text-light background_gradient_reverse button_shadow border-0 fs-4 col-lg-10 col-xl-8 col-xxl-6 col-12"
            >
              Get Verified as Educator
            </button>
          </Link>
        </div>
      </div>
      <div className="d-lg-flex w-100 px-5 justify-content-between background_gradient_reverse row m-0">
        <div className="col-lg-6 my-3 d-flex flex-column justify-content-evenly text-lg-start text-center">
          <h1>Download or make flash card bases revision courses!</h1>
          <h3>Add texts, images, audio notes or video as per requirement</h3>
        </div>
        <div className="d-flex justify-content-center align-items-center col-lg-6 col-12">
          <Image src={videoplay} alt="image for play video" />
        </div>
      </div>
    </div>
  );
};

export default BelowBanner;

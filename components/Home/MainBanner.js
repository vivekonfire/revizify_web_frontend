import Image from "next/image";
import React from "react";
import videoimg from "../../public/video-bg.png";

const MainBanner = () => {
  return (
    <div className="main_banner_bg_image position-relative d-flex justify-content-center">
      <div className="bg-dark bg-opacity-50 position-absolute w-100 h-100"></div>
      <div
        className="my-auto d-flex align-items-center z-9"
        style={{ height: "680px" }}
      >
        <div className="d-md-flex text-light gap-5">
          <div className="d-flex flex-column gap-4 text-center-md justify-content-center z-9 row">
            <div className="fs-1 fw-bold col-9">
              Remember Everything You Study!!
            </div>
            <div className="fs-4 z-9 col-9">
              Develop a Supermemory with Revizify's revision system.
            </div>
            <button className="btn btn-lg text-light rounded-pill p-3 my-3 background_gradient button_shadow z-9 fs-4 col col-4">
              Join Now
            </button>
          </div>
          <div>
            <Image src={videoimg} className="img-fluid" alt="video image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;

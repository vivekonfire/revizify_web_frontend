import Image from "next/image";
import React from "react";
import videoimg from "../../public/video-bg.png";

const MainBanner = () => {
  return (
    <div className="main_banner_bg_image position-relative">
      <div className="bg-dark bg-opacity-50 position-absolute w-100 h-100"></div>
      <div
        className="container my-auto d-flex align-items-center"
        style={{ zIndex: "10", height: "680px" }}
      >
        <div className="d-md-flex text-light gap-5">
          <div className="d-flex flex-column gap-5 text-center-md justify-content-center">
            <div className="fs-1 fw-bold" style={{ zIndex: "10" }}>
              Remember Everything You Study!!
            </div>
            <div className="fs-4 " style={{ zIndex: "10" }}>
              Develop a Supermemory with Revizify's revision system.
            </div>
            <button
              className="btn btn-lg text-light rounded-pill p-3"
              style={{ zIndex: "10", background: "#667eea" }}
            >
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

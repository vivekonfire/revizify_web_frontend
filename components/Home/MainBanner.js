import React from "react";
import Image from "next/image";
import Link from "next/link";
import videoimg from "../../public/video-bg.png";
import styles from "../../styles/Home.module.css";

// import { useDispatch, useSelector } from "react-redux";

const MainBanner = () => {
  // const dispatch = useDispatch();

  const onClick = () => {};

  return (
    <div
      className={`${styles.main_banner_bg_image} position-relative d-flex justify-content-center`}
    >
      <div className="bg-dark bg-opacity-50 position-absolute w-100 h-100"></div>
      <div className="my-5 d-flex align-items-center z-9 leave_navbar">
        <div className="d-lg-flex text-light gap-4 mx-md-5 mx-2">
          <div className="d-flex flex-column gap-4 justify-content-center z-9 my-5">
            <div className="fs-1 fw-bold col-md-9 col-12">
              Remember Everything You Study!!
            </div>
            <div className="fs-4 z-9 col-md-9 col-12">
              Develop a Supermemory with Revizify&apos;s revision system.
            </div>
            <Link href="/loginEmail">
              <div className="d-flex justify-content-lg-start justify-content-center">
                <button
                  className="btn text-light rounded-pill p-3 my-3 background_gradient button_shadow border-0 z-9 fs-4 col-lg-4 col-xl-5 col-6"
                  onClick={onClick}
                >
                  Join Now
                </button>
              </div>
            </Link>
          </div>
          <div className="my-5 d-flex justify-content-center">
            <Image src={videoimg} className="img-fluid" alt="video image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;

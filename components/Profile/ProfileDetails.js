import React from "react";
import Image from "next/image";
import profile_image from "../../public/profile_image.png";
import styles from "../../styles/Profile.module.css";

const ProfileDetails = ({ name, user_name, user_bio }) => {
  return (
    <div
      className={
        styles.background_profile_details +
        `  leave_navbar text-light px-5 pb-5 position-relative`
      }
    >
      <div className="bg-dark bg-opacity-50 position-absolute w-100 h-100 top-0 start-0 z-1"></div>
      <div className="d-md-flex justify-content-center row">
        <div className="col-lg-3 my-4 d-flex justify-content-center  z-9">
          <Image src={profile_image} alt="profile image" />
        </div>
        <div className="col-lg-8 my-auto z-9">
          <div className="fs-3">{name}</div>
          <div className="fs-6">@{user_name}</div>
          <div className="fs-6 mt-4">{user_bio}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;

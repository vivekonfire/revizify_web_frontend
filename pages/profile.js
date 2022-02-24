import React from "react";
import ProfileDetails from "../components/Profile/ProfileDetails";
import CreatedCourses from "../components/Profile/CreatedCourses";

const profile = () => {
  return (
    <div className="min-vh-100">
      <ProfileDetails />
      <CreatedCourses />
    </div>
  );
};

export default profile;

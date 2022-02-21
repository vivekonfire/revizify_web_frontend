import React from "react";
import MainBanner from "../components/Home/MainBanner";
import ExploreCourses from "../components/Home/ExploreCourses";
import BelowBanner from "../components/Home/BelowBanner";

const index = () => {
  return (
    <div>
      <MainBanner />
      <ExploreCourses />
      <BelowBanner />
    </div>
  );
};

export default index;

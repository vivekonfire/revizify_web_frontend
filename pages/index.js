import React from "react";
import MainBanner from "../components/Home/MainBanner";
import ExploreCourses from "../components/Home/ExploreCourses";
import BelowBanner from "../components/Home/BelowBanner";
import Footer from "../components/Layout/Footer";

const index = () => {
  return (
    <div>
      <MainBanner />
      <ExploreCourses />
      <BelowBanner />
      <Footer />
    </div>
  );
};

export default index;

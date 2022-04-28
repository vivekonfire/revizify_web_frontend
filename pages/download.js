import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Auth/Layout";
import LoginEmail from "../components/Auth/LoginEmail";
import DownloadCourse from "../components/CoursePage/DownloadCourse";
import EachCourse from "../components/Layout/EachCourse";

const download = () => {

  return (
    <>
      <Layout>
        <DownloadCourse />
      </Layout>
    </>
  );
};

export default download;

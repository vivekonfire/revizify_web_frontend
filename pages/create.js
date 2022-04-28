import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Auth/Layout";
import LoginEmail from "../components/Auth/LoginEmail";
import ShowCourse from "../components/CoursePage/ShowCourse";

const create = () => {

  return (
    <>
      <Layout>
        <ShowCourse />
      </Layout>
    </>
  );
};

export default create;

import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Auth/Layout";
import LoginEmail from "../components/Auth/LoginEmail";
import Verify from "../components/Verify/Verify";

const verify = () => {

  return (
    <>
      <Layout>
      <Verify/>
    </Layout>
    </>
  );
};

export default verify;

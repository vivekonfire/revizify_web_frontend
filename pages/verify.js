import React from "react";
import VerifyForm from "../components/Verify/VerifyForm";
import VerifyQuestions from "../components/Verify/VerifyQuestions";

const verify = () => {
  return (
    <div className="min-vh-100 d-lg-flex">
      <VerifyForm />
      <VerifyQuestions />
    </div>
  );
};

export default verify;

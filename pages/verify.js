import React from "react";
import VerifyForm from "../components/Verify/VerifyForm";
import VerifyQuestions from "../components/Verify/VerifyQuestions";

const verify = () => {
  return (
    <div className="min-vh-100 d-xl-flex leave_navbar">
      <VerifyForm />
      <VerifyQuestions />
    </div>
  );
};

export default verify;

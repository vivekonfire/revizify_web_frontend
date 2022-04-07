import React from "react";
import Image from "next/image";
import person_jumping from "../../public/person_jumping.png";

const VerifyQuestions = () => {
  return (
    <div className="w-100 leave_navbar d-flex justify-content-center p-4 text-light">
      <div>
        <p className="fs-2 fw-bold">Verify as an Educator</p>
        <p className="fs-6 pointer_cursor">What are verified Educators?</p>
        <p className="fs-6 pointer_cursor">Why get Verified?</p>
        <p className="fs-6 pointer_cursor">
          What are different levels of verification/badges?
        </p>
        <p className="fs-6 pointer_cursor">
          What to do after submitting the verification form?
        </p>
        <div>
          <Image src={person_jumping} alt="person jumping in joy" />
        </div>
      </div>
    </div>
  );
};

export default VerifyQuestions;

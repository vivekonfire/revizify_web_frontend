import React, { useState } from "react";
import Image from "next/image";
import person_jumping from "../../public/person_jumping.png";

const VerifyQuestions = () => {
  const [q1, setQ1] = useState(false);
  const [q2, setQ2] = useState(false);
  const [q3, setQ3] = useState(false);
  const [q4, setQ4] = useState(false);

  return (
    <div className="container w-100 leave_navbar d-flex justify-content-center p-4 text-light">
      <div>
        <p className="fs-2 fw-bold">Verify as an Educator</p>
        <p
          className="fs-6 pointer_cursor"
          onClick={() => {
            setQ1(!q1);
          }}
        >
          What are verified Educators?
        </p>
        {q1 && (
          <p className="mx-4 pb-4">
            Distinguished educators/course creators who have achieved a certain
            level of expertise and credibility in the topics they make courses
            on. These accounts represent a real person, registered business, or
            entity. Accounts with a bronze, silver or a golden star are verified
            educators.
          </p>
        )}
        <p
          className="fs-6 pointer_cursor"
          onClick={() => {
            setQ2(!q2);
          }}
        >
          Why get Verified?
        </p>
        {q2 && (
          <p className="px-4 pb-4">
            Courses by verified educators are shown on top in the search
            results. This also gives credibility and assurance to the user
            buying your courses
          </p>
        )}
        <p
          className="fs-6 pointer_cursor"
          onClick={() => {
            setQ3(!q3);
          }}
        >
          What are different levels of verification/badges?
        </p>
        {q3 && (
          <p className="px-4 pb-4">
            There are 3 badges that all verified educators get in ascending
            order. The badge will be changed by Revizify's team as per the
            quality of courses posted by the educator and the downloads they get
            on Revizify. All verified educators start with a Bronze batch.
            <ul>
              {" "}
              <strong>1. Level 1 - Bronze Star </strong>
            </ul>
            <ul>
              <strong>2. Level 2 - Silver Star </strong>{" "}
            </ul>
            <ul>
              <strong>3. Level 3 - Gold star </strong>
            </ul>
          </p>
        )}
        <p
          className="fs-6 pointer_cursor"
          onClick={() => {
            setQ4(!q4);
          }}
        >
          What to do after submitting the verification form?
        </p>
        {q4 && (
          <p className="px-4 pb-4">
            Our team at Revizify will go over your details. We will verify and
            install your badge if your profile meets the requirement.
            Requirements are not specific, however, you should have had some
            experience/relevance with your field. If however, you do not get
            verified, you may submit the verification form again after a month.
            Kindly make sure that your revised form has some changes than the
            initial form submitted. Send us a mail at{" "}
            <strong> support@revizify.com </strong> for any queries.
          </p>
        )}
        <div>
          <Image src={person_jumping} alt="person jumping in joy" />
        </div>
      </div>
    </div>
  );
};

export default VerifyQuestions;

import React from "react";
import { FaUserAlt } from "react-icons/fa";
import Link from "next/link";

const Reply = ({ value }) => {
  const {
    comment_id,
    course,
    created_at,
    name,
    parent,
    text,
    user,
    user_id,
    user_name,
    user_pic,
  } = value;

  return (
    <div className="col-11 my-3">
      <div className="bg-black bg-opacity-50 rounded-lg position-relative py-3 px-5">
        <FaUserAlt className="fs-3 position-absolute top-50 start-0 translate-middle" />
        <div className="d-flex">
          <Link href={`/profile?name=${user_name}`}>
            <div className="bg-black rounded-pill bg-opacity-25 fs-5 p-2 px-4">
              {name}
            </div>
          </Link>
        </div>
        <div className="fs-6 px-4 my-4">{text}</div>
      </div>
    </div>
  );
};

export default Reply;

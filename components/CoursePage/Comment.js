import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import Reply from "./Reply";

const Comment = () => {
  const [replyDropDown, setReplyDropDown] = useState(false);
  const [reply, setReply] = useState(false);

  return (
    <div className="col-11">
      <div className="bg-black bg-opacity-25 rounded-lg position-relative py-3 px-5">
        <FaUserAlt className="fs-3 position-absolute top-50 start-0 translate-middle" />
        <div className="d-flex">
          <div className="bg-black rounded-pill bg-opacity-25 fs-5 p-2 px-4">
            Vivek Matalia
          </div>
        </div>
        <div className="fs-6 px-4 my-4">
          Commodo fugiat reprehenderit irure deserunt magna Lorem proident velit
          minim deserunt proident. Proident nostrud aliqua ut velit voluptate.
        </div>
        <div
          className="d-flex justify-content-end pe-5 mt-5 pointer_cursor"
          onClick={() => {
            setReply(!reply);
          }}
        >
          <h5>Reply</h5>
        </div>
      </div>
      {replyDropDown ? (
        <div
          className="my-4 fs-5 pointer_cursor"
          onClick={() => {
            setReplyDropDown(!replyDropDown);
          }}
        >
          ____ hide replies
        </div>
      ) : (
        <div
          className="my-4 fs-5 pointer_cursor"
          onClick={() => {
            setReplyDropDown(!replyDropDown);
          }}
        >
          ____ view replies
        </div>
      )}
      {replyDropDown && (
        <div className="d-flex flex-column justify-content-start align-items-end">
          <Reply />
          <Reply />
        </div>
      )}
      {reply && (
        <div className="my-5 d-flex flex-column align-items-end">
          <input
            type="text"
            className="border-top-0 border-start-0 border-end-0 border-bottom-2 border-white bg-transparent p-2 col-12 my-4 text-white"
            placeholder="Write your reply here..."
          />
          <button className="col-3 btn border-0 background_gradient button_shadow rounded-pill text-white p-2 fs-6">
            Post
          </button>
        </div>
      )}
    </div>
  );
};

export default Comment;

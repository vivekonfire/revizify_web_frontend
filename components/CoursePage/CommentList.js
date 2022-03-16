import React from "react";
import Comment from "./Comment";

const Comments = () => {
  return (
    <div className="text-white d-flex justify-content-center align-items-center my-5">
      <div className="col-xl-6 col-lg-8 col-md-10 col-12">
        <h2 className="mb-5">Comments</h2>
        <textarea className="col-12 rounded-md bg-black border-0 bg-opacity-25 p-4 text-white mb-4 height_text_area" />
        <div className="col-12 d-flex justify-content-end align-items-center mb-5">
          <button className="col-3 btn border-0 background_gradient button_shadow rounded-pill text-white p-2 fs-4">
            Post
          </button>
        </div>
        <div className="d-flex flex-column justify-content-start align-items-end">
          <Comment />
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default Comments;

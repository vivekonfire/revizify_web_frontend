import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import { useRouter } from "next/router";
import { postComment, getComments } from "../../store/actions/CommentActions";
import { useDispatch, useSelector } from "react-redux";

const Comments = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");
  const com = useSelector((state) => state.comment.comments);

  const onSubmit = () => {
    const form = {
      text: comment,
      course_id: router.query.id,
    };

    dispatch(postComment(form));

    setComment("");
  };

  useEffect(() => {
    if (router.query.id !== undefined) dispatch(getComments(router.query.id));
  }, [router.query.id]);

  return (
    <div className="text-white d-flex justify-content-center align-items-center my-5">
      <div className="col-xl-6 col-lg-8 col-md-10 col-12">
        <h2 className="mb-5">Comments</h2>
        <textarea
          className="col-12 rounded-md bg-black border-0 bg-opacity-25 p-4 text-white mb-4 height_text_area"
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <div className="col-12 d-flex justify-content-end align-items-center mb-5">
          <button
            className="col-3 btn border-0 background_gradient button_shadow rounded-pill text-white p-2 fs-4"
            onClick={onSubmit}
          >
            Post
          </button>
        </div>
        <div className="d-flex flex-column justify-content-start align-items-end">
          {com?.count > 0 &&
            com?.results.map((value) => {
              return <Comment key={value.comment_id} value={value} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Comments;

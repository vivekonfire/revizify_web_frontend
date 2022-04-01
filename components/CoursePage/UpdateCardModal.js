import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { updateCard } from "../../store/actions/cardAction";

const UpdateCardModal = ({ setUpdateModal, updateCardId }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [headline, setHeadline] = useState("");
  const [text, setText] = useState("");

  const CardSubmit = (e) => {
    e.preventDefault();

    const formdata = {
      course_id: router.query.id,
      card_id: updateCardId,
    };

    if (headline !== null) formdata.title = headline;
    if (text !== null) formdata.desc = text;

    dispatch(updateCard(formdata));
  };
  return (
    <div className="position-fixed start-0 top-0 z-10 min-vh-100 min-vw-100 bg-black bg-opacity-75 d-flex flex-column justify-content-center align-items-center text-white">
      <div
        className="background_gradient overflow-hidden rounded-md"
        style={{
          minHeight: "540px",
          minWidth: "443px",
        }}
      >
        <div className="py-4 w-100 bg-black bg-opacity-50 d-flex px-4 justify-content-between">
          <p className="m-0 fs-3">New Card</p>
          <AiOutlineClose
            className="fs-3 my-auto pointer_cursor"
            onClick={() => {
              setUpdateModal(false);
            }}
          />
        </div>
        <form onSubmit={CardSubmit}>
          <div className="my-4 mx-2">
            <label htmlFor="headline">HeadLine*</label>
            <input
              type="text"
              name="headline"
              className="col-12 bg-black bg-opacity-25 rounded-pill text-white border-0 p-2"
              onChange={(e) => {
                setHeadline(e.target.value);
              }}
            />
          </div>
          <div className="my-4 mx-2">
            <label htmlFor="text">Add Text*</label>
            <textarea
              className="rounded-sm w-100 p-3 height_text_area bg-black bg-opacity-25 border-0 text-white"
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </div>
          <div className="my-4 mx-2 d-flex justify-content-center">
            <button
              type="submit"
              onClick={CardSubmit}
              className="bg-black text-white px-5 py-2 border-0 rounded-pill fs-5"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCardModal;

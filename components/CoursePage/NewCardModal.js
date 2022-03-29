import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { createCard } from "../../store/actions/cardAction";

const NewCardModal = ({ setModal }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [headline, setHeadline] = useState("");
  const [text, setText] = useState("");
  const [selectVideo, setVideo] = useState(null);
  const [selectVideoFile, setVideoFile] = useState(null);

  const onVideoPick = (e) => {
    const video = e.target.files[0];
    if (video) {
      const result = URL.createObjectURL(video);
      setVideo(result);
      setVideoFile(video);
    }
  };

  const CardSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("title", headline);
    formdata.append("desc", text);
    formdata.append("video", selectVideoFile);
    formdata.append("course_id", router.query.id);

    dispatch(createCard(formdata));
  };
  return (
    <div className="position-fixed start-0 top-0 z-10 min-vh-100 min-vw-100 bg-black bg-opacity-75 d-flex flex-column justify-content-center align-items-center text-white">
      <div
        className="background_gradient overflow-hidden rounded-md"
        style={{
          minHeight: "664px",
          minWidth: "443px",
        }}
      >
        <div className="py-4 w-100 bg-black bg-opacity-50 d-flex px-4 justify-content-between">
          <p className="m-0 fs-3">New Card</p>
          <AiOutlineClose
            className="fs-3 my-auto pointer_cursor"
            onClick={() => {
              setModal(false);
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
            <label htmlFor="video">
              Add Video*
              <div className=" d-xxl-flex justify-content-center align-items-stretch">
                <div className="d-flex justify-content-center align-items-center col-xxl-6 col-12">
                  {selectVideo ? (
                    <div className="col-8 d-flex justify-content-center">
                      {/* <Image
                        src={selectVideo}
                        alt="course image"
                        width={223}
                        height={126}
                        className="rounded-sm"
                      /> */}
                    </div>
                  ) : (
                    <div
                      className="bg-black bg-opacity-25 rounded-sm pointer_cursor col-6 d-flex justify-content-center align-items-center fs-1"
                      style={{
                        minHeight: "126px",
                        minWidth: "223px",
                        maxHeight: "126px",
                        maxWidth: "223px",
                      }}
                    ></div>
                  )}
                </div>
              </div>
            </label>
            <input
              type="file"
              id="video"
              accept="video/*"
              onChange={onVideoPick}
              className="d-none"
              name="video"
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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCardModal;

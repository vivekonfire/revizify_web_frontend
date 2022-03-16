import React from "react";
import { FaUserAlt } from "react-icons/fa";

const Reply = () => {
  return (
    <div className="col-11 my-3">
      <div className="bg-black bg-opacity-50 rounded-lg position-relative py-3 px-5">
        <FaUserAlt className="fs-3 position-absolute top-50 start-0 translate-middle" />
        <div className="d-flex">
          <div className="bg-black rounded-pill bg-opacity-25 fs-5 p-2 px-4">
            Vivek Matalia
          </div>
        </div>
        <div className="fs-6 px-4 my-4">
          Commodo fugiat reprehenderit irure deserunt magna Lorem proident
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
    </div>
  );
};

export default Reply;

import React from "react";
import Link from "next/link";

const SuccessModal = () => {
  return (
    <div className="position-fixed start-0 top-0 z-10 min-vh-100 min-vw-100 bg-black bg-opacity-75 d-flex flex-column justify-content-center align-items-center text-white">
      <h1>Success</h1>
      <Link href="/">
        <button
          type="button"
          className="btn rounded-pill background_gradient button_shadow border-0 text-light col-4 p-2 fs-5 "
        >
          <div>Procced</div>
        </button>
      </Link>
    </div>
  );
};

export default SuccessModal;

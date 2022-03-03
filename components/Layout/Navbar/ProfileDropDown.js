import React from "react";

const ProfileDropDown = () => {
  return (
    <div
      className="background_gradient rounded-sm z-10 position-absolute top-0 end-0 mx-4 overflow-hidden"
      style={{ marginTop: "4.5rem", width: "350px", height: "420px" }}
    >
      <div className="d-flex">
        <h5 className="text-center w-100 py-4 bg-black bg-opacity-50">
          Notifications
        </h5>
        <h5 className="text-center w-100 py-4 bg-black bg-opacity-50">
          My Profile
        </h5>
      </div>
      <div>
        <ul className="my-3 p-0 mx-4">
          <li className="border-bottom border-bottom-2 border-white py-3 d-flex align-items-center">
            <div className="me-3 d-flex align-items-center">
              <Image
                src={profile_image}
                alt="profile image"
                className="pointer_cursor"
              />
            </div>
            <div className="fs-6">Vivek Matalia</div>
          </li>
          <li className="border-bottom border-bottom-2 border-white py-3">
            My Profile
          </li>
          <li className="border-bottom border-bottom-2 border-white py-3">
            My Downloads
          </li>
          <li className="border-bottom border-bottom-2 border-white py-3">
            Change Password
          </li>
        </ul>
        <button className="background_gradient button_shadow p-2 rounded-pill w-50 float-end mx-3 btn text-light">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default ProfileDropDown;

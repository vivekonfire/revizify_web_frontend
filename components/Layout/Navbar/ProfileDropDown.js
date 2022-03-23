import React, { useState } from "react";
import ProfileOptions from "./ProfileOptions";
import Notifications from "./Notifications";

const ProfileDropDown = () => {
  const [focus, setFocus] = useState(0);

  return (
    <div
      className="background_gradient rounded-sm z-10 position-absolute top-0 end-0 mx-4 overflow-hidden"
      style={{ marginTop: "6rem", width: "350px", height: "420px" }}
    >
      <div className="d-flex">
        {focus === 0 ? (
          <div
            className="text-center w-100 py-4 bg-black bg-opacity-50 pointer_cursor"
            onClick={() => {
              setFocus(1);
            }}
          >
            Notifications
          </div>
        ) : (
          <div
            className="text-center w-100 py-4 pointer_cursor fs-5"
            onClick={() => {
              setFocus(1);
            }}
          >
            Notifications
          </div>
        )}
        {focus === 1 ? (
          <div
            className="text-center w-100 py-4 bg-black bg-opacity-50 pointer_cursor"
            onClick={() => {
              setFocus(0);
            }}
          >
            My Profile
          </div>
        ) : (
          <div
            className="text-center w-100 py-4 pointer_cursor fs-5"
            onClick={() => {
              setFocus(0);
            }}
          >
            My Profile
          </div>
        )}
      </div>
      {focus === 0 ? <ProfileOptions /> : <Notifications />}
    </div>
  );
};

export default ProfileDropDown;

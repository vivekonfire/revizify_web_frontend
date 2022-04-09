import React, { useState } from "react";
import ProfileOptions from "./ProfileOptions";
import Notifications from "./Notifications";

const ProfileDropDown = ({ setProfileDropDown }) => {
  const [focus, setFocus] = useState(0);

  return (
    <div
      className="position-fixed start-0 top-0 z-9 min-vh-100 min-vw-100 bg-black bg-opacity-75"
      onClick={() => {
        setProfileDropDown(false);
      }}
    >
      <div
        className="background_gradient rounded-sm position-absolute top-0 end-0 mx-4 overflow-hidden z-10"
        style={{
          marginTop: "6rem",
          width: "350px",
          height: "420px",
        }}
        onClick={(e) => e.stopPropagation()}
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
        {focus === 0 ? (
          <ProfileOptions setProfileDropDown={setProfileDropDown} />
        ) : (
          <Notifications />
        )}
      </div>
    </div>
  );
};

export default ProfileDropDown;

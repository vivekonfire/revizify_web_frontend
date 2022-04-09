import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/actions/authActions";
import Cookies from "js-cookie";

const ProfileOptions = ({ setProfileDropDown }) => {
  const dispatch = useDispatch();

  const user_name = Cookies.get("userName");
  const name = Cookies.get("name");

  const onClick = () => {
    dispatch(logout());
  };

  return (
    <div
      onClick={() => {
        setProfileDropDown(false);
      }}
    >
      <ul className="my-3 p-0 mx-4">
        <li className="border-bottom border-bottom-2 border-white py-3 d-flex align-items-center">
          <div className="me-3 d-flex align-items-center">
            <FaUserCircle alt="profile image" className="pointer_cursor fs-3" />
          </div>
          <div className="fs-6">{name}</div>
        </li>
        <li className="border-bottom border-bottom-2 border-white py-3">
          <Link href={`/profile?name=${user_name}`}>
            <div className="pointer_cursor">My Profile</div>
          </Link>
        </li>
        <li className="border-bottom border-bottom-2 border-white py-3">
          <Link href="/download">
            <div className="pointer_cursor">My Downloads</div>
          </Link>
        </li>
        <li className="border-bottom border-bottom-2 border-white py-3">
          <Link href="/changepassword">
            <div className="pointer_cursor">Change Password</div>
          </Link>
        </li>
      </ul>
      <button
        className="background_gradient button_shadow p-2 rounded-pill w-50 float-end mx-3 btn text-light border-0"
        onClick={onClick}
      >
        Log Out
      </button>
    </div>
  );
};

export default ProfileOptions;

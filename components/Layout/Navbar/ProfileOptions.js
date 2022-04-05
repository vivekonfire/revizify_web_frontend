import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/actions/authActions";

const ProfileOptions = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const onClick = () => {
    dispatch(logout());
  };

  return (
    <div>
      <ul className="my-3 p-0 mx-4">
        <li className="border-bottom border-bottom-2 border-white py-3 d-flex align-items-center">
          <div className="me-3 d-flex align-items-center">
            <FaUserCircle alt="profile image" className="pointer_cursor fs-3" />
          </div>
          <div className="fs-6">{user.name}</div>
        </li>
        <li className="border-bottom border-bottom-2 border-white py-3">
          <Link href={`/profile?name=${user.user_name}`}>
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
        className="background_gradient button_shadow p-2 rounded-pill w-50 float-end mx-3 btn text-light"
        onClick={onClick}
      >
        Log Out
      </button>
    </div>
  );
};

export default ProfileOptions;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo-nav.png";
import search_icon from "../../public/search-icon.png";
import profile_image from "../../public/unsplash_tAvpDE7fXgY.png";
import { FiMenu } from "react-icons/fi";

const NavBar = () => {
  return (
    <div
      className="d-lg-flex text-light w-100 px-5 bg-transperent shadow position-fixed justify-content-between gap-5 align-items-center navbar navbar-expand-md"
      style={{ zIndex: "10" }}
    >
      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navmenu"
      >
        <FiMenu style={{ color: "white" }} />
        {/* <span className="navbar-toggler-icon"></span> */}
      </button>
      <div className="collapse navbar-collapse" id="navmenu">
        <ul className=" d-flex justify-content-between align-items-center w-100 navbar-nav">
          <li className="nav-item">
            <div className="d-flex flex-column align-items-center pointer_cursor">
              <Image src={logo} alt="revizify logo image" />
              <div className="fs-6">Revizify</div>
            </div>
          </li>
          <li className="nav-item">
            <Link href="/">
              <div className="on_it pointer_cursor p-3">Home</div>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/create">
              <div className="on_it pointer_cursor p-3">Create</div>
            </Link>
          </li>
          <li className="nav-item w-25">
            <input
              className="p-2 w-100 rounded-pill input-group-text form-control border-0"
              placeholder="Search Courses..."
            ></input>
          </li>
          <li className="nav-item">
            <Link href="/download">
              <div className="on_it pointer_cursor p-3">Download</div>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/verify">
              <div className="on_it pointer_cursor p-3">Verify As Educator</div>
            </Link>
          </li>
        </ul>
      </div>
      <Image src={profile_image} alt="profile image" />
    </div>
  );
};

export default NavBar;

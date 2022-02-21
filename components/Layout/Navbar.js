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
      className="d-md-flex text-light w-100 px-5 my-2 bg-transparent position-fixed justify-content-between gap-5 align-items-center navbar navbar-expand-md"
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
            <div className="d-flex flex-column align-items-center">
              <Image src={logo} alt="revizify logo image" />
              <div className="fs-6">Revizify</div>
            </div>
          </li>
          <li className="nav-item">
            <Link href="/">
              <div>Home</div>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/create">
              <div>Create</div>
            </Link>
          </li>
          <li className="nav-item w-25">
            <input
              className="p-2 w-100 rounded-pill input-group-text"
              placeholder="Search Courses..."
            ></input>
          </li>
          <li className="nav-item">
            <Link href="/download">
              <div>Download</div>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/verify">
              <div>Verify As Educator</div>
            </Link>
          </li>
        </ul>
      </div>
      <Image src={profile_image} alt="profile image" />
    </div>
  );
};

export default NavBar;

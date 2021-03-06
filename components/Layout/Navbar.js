import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo-nav.png";
import search_icon from "../../public/search-icon.png";
import { FiMenu } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { AiOutlineLogin } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import ProfileDropDown from "./Navbar/ProfileDropDown";
import { useSelector } from "react-redux";
import ToggleOptions from "./Navbar/ToggleOptions";

const NavBar = () => {
  const token = useSelector((state) => state.auth.valid_token);

  useEffect(() => {
    if (!token) setProfileDropDown(false);
  }, [token]);

  const [profileDropDown, setProfileDropDown] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="d-lg-flex text-light w-100 px-sm-5 px-2 background_gradient shadow position-fixed justify-content-between align-items-center gap-5 navbar navbar-expand-lg z-10">
      <button
        type="button"
        className="d-flex gap-5 d-lg-none bg-transparent border-0 text-white"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
      >
        <div className="d-flex align-items-center justify-content-center my-auto">
          <FiMenu className="fs-2 z-10" onClick={() => setToggle(!toggle)} />
        </div>
        <Link href="/">
          <div className="d-flex p-2 bg-light bg-opacity-25 border border-2 border-light rounded-3 align-items-center pointer_cursor ">
            <Image src={logo} alt="revizify logo image" />
            <div className="fs-5 fw-bold ps-2">Revizify</div>
          </div>
        </Link>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className=" d-flex justify-content-start gap-5 align-items-center w-100 navbar-nav">
          <li className="nav-item">
            <Link href="/">
              <div className="d-flex p-2 bg-light bg-opacity-25 border border-2 border-light rounded-3 align-items-center pointer_cursor">
                <Image src={logo} alt="revizify logo image" />
                <div className="fs-5 fw-bold ps-2">Revizify</div>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/create">
              <div className="on_it rounded-3 pointer_cursor p-3">Create</div>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/download">
              <div className="on_it pointer_cursor rounded-3  p-3">
                Download
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/verify">
              <div className="on_it pointer_cursor  rounded-3 p-3">
                Verify As Educator
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-item col-lg-3 d-none d-md-flex position-relative">
        <input className="px-4 py-2 pe-5 w-100 rounded-pill form-control border-0"></input>
        <div className="position-absolute top-50 end-0 mx-3 translate-middle-y">
          <Image src={search_icon} alt="search icon" />
        </div>
      </div>
      <div className="d-flex gap-3">
        <div className="nav-item d-md-none text-white">
          <BiSearch className="fs-3 pointer_cursor" />
        </div>
        {!token ? (
          <Link href="/loginEmail">
            <AiOutlineLogin
              className="pointer_cursor fs-3"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Login/SignUp"
            />
          </Link>
        ) : (
          <FaUserCircle
            className="pointer_cursor fs-3 z-10"
            onClick={() => {
              setProfileDropDown(!profileDropDown);
            }}
          />
        )}
      </div>
      {profileDropDown && (
        <ProfileDropDown setProfileDropDown={setProfileDropDown} />
      )}
      {toggle && <ToggleOptions setToggle={setToggle} />}
    </nav>
  );
};

export default NavBar;

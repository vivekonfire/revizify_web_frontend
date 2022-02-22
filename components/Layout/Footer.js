import React from "react";
import logo from "../../public/logo-nav.png";
import Link from "next/link";
import Image from "next/image";
import googlePlay from "../../public/google_play.png";

const Footer = () => {
  return (
    <div
      className="d-flex justify-content-between px-4 text-white p-3"
      style={{ backgroundColor: "#667EEA" }}
    >
      <div className="d-flex justify-content-center align-items-center">
        <Image src={logo} alt="Revizify logo" />
        <div style={{ fontSize: "13px", color: "whitesmoke" }}>Revizify</div>
      </div>
      <div className="d-md-flex justify-content-center text-center align-items-center">
        <Link href="/">
          <div className="mx-3 my-2 pointer_cursor">About Us</div>
        </Link>
        <Link href="/create">
          <div className="mx-3 my-2 pointer_cursor">Contact Us</div>
        </Link>
        <Link href="/download">
          <div className="mx-3 my-2 pointer_cursor">Terms</div>
        </Link>
        <Link href="/verify">
          <div className="mx-3 my-2 pointer_cursor">FAQ</div>
        </Link>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Image src={googlePlay} />
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import logo from "../../public/logo-nav.png";
import Link from "next/link";
import Image from "next/image";
import googlePlay from "../../public/google_play.png";

const Footer = () => {
  return (
    <div className="d-flex justify-content-between px-4 text-white p-3 bg-black bg-opacity-50">
      <div className="d-flex justify-content-center align-items-start">
        <div className="d-flex p-1 gap-2 bg-light bg-opacity-25 border border-2 border-light rounded-3 align-items-center pointer_cursor">
          <Image src={logo} alt="Revizify logo" />
          <div className="fs-6">Revizify</div>
        </div>
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
      <div className="d-flex justify-content-center align-items-start">
        <Image src={googlePlay} />
      </div>
    </div>
  );
};

export default Footer;

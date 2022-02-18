import React from "react";
import logo from "../../public/logo-nav.png";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Layout/Footer.module.css";
import googlePlay from "../../public/google_play.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src={logo} />
        <div style={{ fontSize: "13px", color: "whitesmoke" }}>Revizify</div>
      </div>
      <div className={styles.itemSet}>
        <Link styles={{ cursor: "pointer" }} href="/">
          <div className={styles.items}>About Us</div>
        </Link>
        <Link href="/create">
          <div className={styles.items}>Contact Us</div>
        </Link>
        <Link href="/download">
          <div className={styles.items}>Terms</div>
        </Link>
        <Link href="/verify">
          <div className={styles.items}>FAQ</div>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "1rem",
        }}
      >
        <Image src={googlePlay} />
      </div>
    </div>
  );
};

export default Footer;

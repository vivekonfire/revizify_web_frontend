import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo-nav.png";
import search_icon from "../../public/search-icon.png";
import styles from "../../styles/Layout/Navbar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={logo} />
        <div style={{ fontSize: "13px", color: "whitesmoke" }}>Revizify</div>
      </div>
      <Link styles={{ cursor: "pointer" }} href="/">
        <div className={styles.items}>Home</div>
      </Link>
      <Link href="/create">
        <div className={styles.items}>Create</div>
      </Link>
      <input className={styles.search} placeholder="Search Courses...">
        {/* <Image src={search_icon} /> */}
      </input>
      <Link href="/download">
        <div className={styles.items}>Download</div>
      </Link>
      <Link href="/verify">
        <div className={styles.items}>Verify as Educator</div>
      </Link>
    </div>
  );
};

export default NavBar;

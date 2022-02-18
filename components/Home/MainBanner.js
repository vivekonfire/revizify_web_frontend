import Image from "next/image";
import React from "react";
import styles from "../../styles/Home/MainBanner.module.css";
import videoimg from "../../public/video-bg.png";
import videobtn from "../../public/video-button.png";

const MainBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cover}></div>
      <div className={styles.parts}>
        <div className={styles.part1}>
          <div style={{ fontSize: "48px", fontWeight: "700" }}>
            Remember Everything You Study!!
          </div>
          <div style={{ fontSize: "24px", fontWeight: "400" }}>
            Develop a Supermemory with Revizify's revision system.
          </div>
          <button className={styles.btnJoinNow}>
            <p style={{ fontSize: "larger", padding: "0", margin: "0" }}>
              Join Now
            </p>
          </button>
        </div>
        <div className={styles.part2}>
          <Image src={videoimg} />
          {/* <Image src={videobtn} /> */}
        </div>
      </div>
    </div>
  );
};

export default MainBanner;

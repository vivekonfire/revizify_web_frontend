import React from "react";
import styles from "../../styles/Home/BelowBanner.module.css";
import Image from "next/image";
import videoimg from "../../public/video-bg.png";
import videobtn from "../../public/video-button.png";
import videoplay from "../../public/pngwing.png";
import bulbimg from "../../public/Paid-idea-cuate-1.svg";

const BelowBanner = () => {
  return (
    <div style={{ marginBottom: "300px" }}>
      <div className={styles.part1}>
        <div>
          <h1>You Forget 80% of what you studying a week!</h1>
          <h3>
            Revizify revision system helps you remember everything you study.
          </h3>
        </div>
        <Image src={videoimg} />
        {/* <Image src={videobtn} /> */}
      </div>
      <div className={styles.part2}>
        <Image src={bulbimg} />
        <div>
          <h1>Monetise your courses if it crosses 500 downloads!</h1>
          <button className={styles.btn}>Get Verified as Educator</button>
        </div>
      </div>
      <div className={styles.part3}>
        <div>
          <h1>Download or make flash card bases revision courses!</h1>
          <h3>Add texts, images, audio notes or video as per requirement</h3>
        </div>
        <Image src={videoplay} />
      </div>
    </div>
  );
};

export default BelowBanner;

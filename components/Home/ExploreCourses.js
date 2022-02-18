import Image from "next/image";
import React from "react";
import styles from "../../styles/Home/ExploreCourse.module.css";
import image from "../../public/unsplash_ucUB9wxkPgY.png";
import profileImage from "../../public/unsplash_tAvpDE7fXgY.png";
import { BsThreeDots, BsHandThumbsUp } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaDiceFive, FaShareAlt } from "react-icons/fa";

const ExploreCourses = () => {
  return (
    <div className={styles.container}>
      <div
        style={{
          fontSize: "36px",
          fontWeigth: "700",
          marginBottom: "2rem",
          color: "white",
        }}
      >
        Explore Course
      </div>
      <div className={styles.grid}>
        <div className={styles.item}>
          <Image src={image} />
          <div className={styles.part1}>
            Pariatur cillum sit sunt sint sit deserunt nisi consectetur ipsum.
          </div>
          <div className={styles.part2}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Image src={profileImage} />
              <p
                style={{
                  padding: "0",
                  margin: "0 0.4rem",
                  fontSize: "12px",
                  fontWeight: "400",
                }}
              >
                Shahi Shekhar
              </p>
            </div>
            <p
              style={{
                padding: "0",
                margin: "0 0.4rem",
                fontSize: "12px",
                fontWeight: "400",
              }}
            >
              Published - 17/09/22
            </p>
          </div>
          <div className={styles.part3}>
            <div
              style={{
                background: "black",
                borderRadius: "50%",
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaShareAlt className={styles.icon} />
            </div>
            <div
              style={{
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsHandThumbsUp className={styles.icon} />
            </div>
            <div
              style={{
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HiDownload className={styles.icon} />
            </div>
            <div
              style={{
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsThreeDots className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <Image src={image} />
          <div className={styles.part1}>
            Pariatur cillum sit sunt sint sit deserunt nisi consectetur ipsum.
          </div>
          <div className={styles.part2}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Image src={profileImage} />
              <p
                style={{
                  padding: "0",
                  margin: "0 0.4rem",
                  fontSize: "12px",
                  fontWeight: "400",
                }}
              >
                Shahi Shekhar
              </p>
            </div>
            <p
              style={{
                padding: "0",
                margin: "0 0.4rem",
                fontSize: "12px",
                fontWeight: "400",
              }}
            >
              Published - 17/09/22
            </p>
          </div>
          <div className={styles.part3}>
            <div
              style={{
                background: "black",
                borderRadius: "50%",
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaShareAlt className={styles.icon} />
            </div>
            <div
              style={{
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsHandThumbsUp className={styles.icon} />
            </div>
            <div
              style={{
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HiDownload className={styles.icon} />
            </div>
            <div
              style={{
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsThreeDots className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <Image src={image} />
          <div className={styles.part1}>
            Pariatur cillum sit sunt sint sit deserunt nisi consectetur ipsum.
          </div>
          <div className={styles.part2}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Image src={profileImage} />
              <p
                style={{
                  padding: "0",
                  margin: "0 0.4rem",
                  fontSize: "12px",
                  fontWeight: "400",
                }}
              >
                Shahi Shekhar
              </p>
            </div>
            <p
              style={{
                padding: "0",
                margin: "0 0.4rem",
                fontSize: "12px",
                fontWeight: "400",
              }}
            >
              Published - 17/09/22
            </p>
          </div>
          <div className={styles.part3}>
            <div
              style={{
                background: "black",
                borderRadius: "50%",
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaShareAlt className={styles.icon} />
            </div>
            <div
              style={{
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsHandThumbsUp className={styles.icon} />
            </div>
            <div
              style={{
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HiDownload className={styles.icon} />
            </div>
            <div
              style={{
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsThreeDots className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <Image src={image} />
          <div className={styles.part1}>
            Pariatur cillum sit sunt sint sit deserunt nisi consectetur ipsum.
          </div>
          <div className={styles.part2}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Image src={profileImage} />
              <p
                style={{
                  padding: "0",
                  margin: "0 0.4rem",
                  fontSize: "12px",
                  fontWeight: "400",
                }}
              >
                Shahi Shekhar
              </p>
            </div>
            <p
              style={{
                padding: "0",
                margin: "0 0.4rem",
                fontSize: "12px",
                fontWeight: "400",
              }}
            >
              Published - 17/09/22
            </p>
          </div>
          <div className={styles.part3}>
            <div
              style={{
                background: "black",
                borderRadius: "50%",
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaShareAlt className={styles.icon} />
            </div>
            <div
              style={{
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsHandThumbsUp className={styles.icon} />
            </div>
            <div
              style={{
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HiDownload className={styles.icon} />
            </div>
            <div
              style={{
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsThreeDots className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <Image src={image} />
          <div className={styles.part1}>
            Pariatur cillum sit sunt sint sit deserunt nisi consectetur ipsum.
          </div>
          <div className={styles.part2}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Image src={profileImage} />
              <p
                style={{
                  padding: "0",
                  margin: "0 0.4rem",
                  fontSize: "12px",
                  fontWeight: "400",
                }}
              >
                Shahi Shekhar
              </p>
            </div>
            <p
              style={{
                padding: "0",
                margin: "0 0.4rem",
                fontSize: "12px",
                fontWeight: "400",
              }}
            >
              Published - 17/09/22
            </p>
          </div>
          <div className={styles.part3}>
            <div
              style={{
                background: "black",
                borderRadius: "50%",
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaShareAlt className={styles.icon} />
            </div>
            <div
              style={{
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsHandThumbsUp className={styles.icon} />
            </div>
            <div
              style={{
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HiDownload className={styles.icon} />
            </div>
            <div
              style={{
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsThreeDots className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <Image src={image} />
          <div className={styles.part1}>
            Pariatur cillum sit sunt sint sit deserunt nisi consectetur ipsum.
          </div>
          <div className={styles.part2}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Image src={profileImage} />
              <p
                style={{
                  padding: "0",
                  margin: "0 0.4rem",
                  fontSize: "12px",
                  fontWeight: "400",
                }}
              >
                Shahi Shekhar
              </p>
            </div>
            <p
              style={{
                padding: "0",
                margin: "0 0.4rem",
                fontSize: "12px",
                fontWeight: "400",
              }}
            >
              Published - 17/09/22
            </p>
          </div>
          <div className={styles.part3}>
            <div
              style={{
                background: "black",
                borderRadius: "50%",
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaShareAlt className={styles.icon} />
            </div>
            <div
              style={{
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsHandThumbsUp className={styles.icon} />
            </div>
            <div
              style={{
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HiDownload className={styles.icon} />
            </div>
            <div
              style={{
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsThreeDots className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <Image src={image} />
          <div className={styles.part1}>
            Pariatur cillum sit sunt sint sit deserunt nisi consectetur ipsum.
          </div>
          <div className={styles.part2}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Image src={profileImage} />
              <p
                style={{
                  padding: "0",
                  margin: "0 0.4rem",
                  fontSize: "12px",
                  fontWeight: "400",
                }}
              >
                Shahi Shekhar
              </p>
            </div>
            <p
              style={{
                padding: "0",
                margin: "0 0.4rem",
                fontSize: "12px",
                fontWeight: "400",
              }}
            >
              Published - 17/09/22
            </p>
          </div>
          <div className={styles.part3}>
            <div
              style={{
                background: "black",
                borderRadius: "50%",
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaShareAlt className={styles.icon} />
            </div>
            <div
              style={{
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsHandThumbsUp className={styles.icon} />
            </div>
            <div
              style={{
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HiDownload className={styles.icon} />
            </div>
            <div
              style={{
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsThreeDots className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <Image src={image} />
          <div className={styles.part1}>
            Pariatur cillum sit sunt sint sit deserunt nisi consectetur ipsum.
          </div>
          <div className={styles.part2}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Image src={profileImage} />
              <p
                style={{
                  padding: "0",
                  margin: "0 0.4rem",
                  fontSize: "12px",
                  fontWeight: "400",
                }}
              >
                Shahi Shekhar
              </p>
            </div>
            <p
              style={{
                padding: "0",
                margin: "0 0.4rem",
                fontSize: "12px",
                fontWeight: "400",
              }}
            >
              Published - 17/09/22
            </p>
          </div>
          <div className={styles.part3}>
            <div
              style={{
                background: "black",
                borderRadius: "50%",
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaShareAlt className={styles.icon} />
            </div>
            <div
              style={{
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsHandThumbsUp className={styles.icon} />
            </div>
            <div
              style={{
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HiDownload className={styles.icon} />
            </div>
            <div
              style={{
                width: "42px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsThreeDots className={styles.icon} />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "24px",
          fontWeight: "700",
          margin: "2rem 0 0.5rem 0",
        }}
      >
        See More
      </div>
    </div>
  );
};

export default ExploreCourses;

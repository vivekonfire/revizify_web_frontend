import React from "react";
import EachCourse from "../components/Layout/EachCourse";
import Image from "next/image";
import search_image from "../public/search-icon.png";
import Link from "next/link";

const create = () => {
  return (
    <div className="text-light leave_navbar mx-5">
      <div className="my-5 d-lg-flex flex-row-reverse">
        <div className="d-flex w-100 justify-content-end py-2">
          <div className="d-flex justify-content-center align-items-center mx-2">
            <Image src={search_image} alt="search button image" />
          </div>
          <button className="bg-black p-2 btn rounded-pill text-light">
            <Link href="/createCourse">
              <div>+ Add New Course</div>
            </Link>
          </button>
        </div>
        <div className="fs-1 fw-bold w-100">Courses Created (25)</div>
      </div>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 justify-content-evenly">
        <EachCourse />
        <EachCourse />
        <EachCourse />
        <EachCourse />
        <EachCourse />
        <EachCourse />
        <EachCourse />
        <EachCourse />
      </div>
    </div>
  );
};

export default create;

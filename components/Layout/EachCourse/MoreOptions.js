import React, { useState } from "react";
import { BiArchiveIn } from "react-icons/bi";
import { AiOutlineDownload, AiFillEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { archiveCourse, restoreArchiveCourses } from "../../../store/actions/courseAction";
import { deleteDownloadCourses } from "../../../store/actions/courseAction";
import { useRouter } from "next/router";
import Link from "next/link";

const MoreOptions = ({ user, course_id }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = router.pathname;
  const onClick = () => {
    if (router.pathname === "/create") dispatch(archiveCourse(course_id));
    else if (router.pathname === "/archive") dispatch(restoreArchiveCourses(course_id));
    else dispatch(deleteDownloadCourses(course_id));
  };

  return (
    <div className="position-absolute px-4 py-2 bg-black rounded-sm bottom-0 end-0 mx-5 my-4">
      <div className="text-white mb-2">
        <div
          className="d-flex justify-content-center align-items-center gap-2 pointer_cursor"
          onClick={onClick}
        >
          <BiArchiveIn />
          <p className="p-0 m-0">{pathname=="/archive"?"Restore":"Archive"}</p>
        </div>
      </div>
      {pathname!=="/archive" ? user ? (
        <div className="text-white">
          <div className="d-flex justify-content-start align-items-center gap-2">
            <AiOutlineDownload />
            <p className="p-0 m-0">Downlaod</p>
          </div>
        </div>
      ) : (
        <div className="text-white">
          <Link href={`/editCourse?id=${course_id}`}>
            <div className="d-flex justify-content-start align-items-center gap-2 pointer_cursor">
              <AiFillEdit />
              <p className="p-0 m-0">Edit</p>
            </div>
          </Link>
        </div>
      ):""}
    </div>
  );
};

export default MoreOptions;

import React, { useEffect } from "react";
import CourseDetails from "./CourseDetials";
import DownloadCards from "./DownloadCards";
import Comments from "./CommentList";
import { getCards } from "../../store/actions/cardAction";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const ViewCourse = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const cards = useSelector((state) => state.card.cards);

  useEffect(() => {
    const form = {
      course_id: router.query.id,
    };
    if (router.query.id !== undefined) dispatch(getCards(form));
  }, [router.query.id]);

  return (
    <div className="leave_navbar mx-sm-5 mx-1 min-vh-100">
      <div className="d-xl-flex justify-content-between p-0">
        <CourseDetails />
        <DownloadCards className="position-relative" cards={cards} />
      </div>
      <Comments />
    </div>
  );
};

export default ViewCourse;

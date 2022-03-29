import React, { useState } from "react";
import CourseDetails from "./CourseDetials";
import CreaterCard from "./CreaterCard";
import Comments from "./CommentList";
import NewCardModal from "./NewCardModal";

const CreaterCourse = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="leave_navbar mx-sm-5 mx-1 min-vh-100 ">
      {modal && <NewCardModal setModal={setModal} />}
      <div className="d-xl-flex justify-content-between p-0">
        <CourseDetails />
        <CreaterCard setModal={setModal} />
      </div>
      <Comments />
    </div>
  );
};

export default CreaterCourse;

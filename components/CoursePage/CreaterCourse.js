import React, { useState, useEffect } from "react";
import CourseDetails from "./CourseDetials";
import CreaterCard from "./CreaterCard";
import Comments from "./CommentList";
import NewCardModal from "./NewCardModal";
import UpdateCardModal from "./UpdateCardModal";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getCards } from "../../store/actions/cardAction";

const CreaterCourse = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [modal, setModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [updateCardId, setUpdateCardId] = useState();
  const cards = useSelector((state) => state.card.cards);
  const course = useSelector((state) => state.card.course);

  useEffect(() => {
    const form = {
      course_id: router.query.id,
    };
    if (router.query.id !== undefined) dispatch(getCards(form));

    if (course === false) {
      router.push("/404");
    }
  }, [router.query.id, course]);

  return (
    <div className="leave_navbar mx-sm-5 mx-1 min-vh-100 ">
      {modal && <NewCardModal setModal={setModal} />}
      {updateModal && (
        <UpdateCardModal
          setUpdateModal={setUpdateModal}
          updateCardId={updateCardId}
        />
      )}
      <div className="d-xl-flex justify-content-between p-0">
        <CourseDetails />
        <CreaterCard
          className="position-relative"
          cards={cards}
          setModal={setModal}
          setUpdateModal={setUpdateModal}
          setUpdateCardId={setUpdateCardId}
        />
      </div>
      <Comments />
    </div>
  );
};

export default CreaterCourse;

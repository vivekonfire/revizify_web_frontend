import React from "react";
import { BiArchiveIn } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { deleteCard } from "../../store/actions/cardAction";

const CardMoreOptions = ({
  card_id,
  setUpdateModal,
  setMoreOption,
  setUpdateCardId,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const onEdit = () => {
    setUpdateModal(true);
    setMoreOption(false);
    setUpdateCardId(card_id);
  };

  const onDelete = () => {
    const form = {
      card_id: card_id,
    };

    dispatch(deleteCard(router.query.id, form));
  };

  return (
    <div className="position-absolute px-4 py-2 bg-black bg-opacity-75 rounded-sm  bottom-0 end-0">
      <div className="text-white mb-2">
        <div
          className="d-flex justify-content-center align-items-center gap-2 pointer_cursor"
          onClick={onDelete}
        >
          <BiArchiveIn />
          <p className="p-0 m-0">Archive</p>
        </div>
      </div>
      <div className="text-white">
        <div
          className="d-flex justify-content-start align-items-center gap-2 pointer_cursor"
          onClick={onEdit}
        >
          <AiFillEdit />
          <p className="p-0 m-0">Edit</p>
        </div>
      </div>
    </div>
  );
};

export default CardMoreOptions;

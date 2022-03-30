import React, { useEffect } from "react";
import ProfileDetails from "./ProfileDetails";
import CreatedCourses from "./CreatedCourses";
import { useDispatch, useSelector } from "react-redux";
import { userCourse } from "../../store/actions/userAction";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const details = useSelector((state) => state.user.userinfo);

  useEffect(() => {
    dispatch(userCourse(router.query.name));
  }, [router.query.name]);

  // const { name, user_name, user_bio, results, count } = details;

  return (
    <div className="min-vh-100">
      <ProfileDetails
        name={details?.name}
        user_name={details?.user_name}
        user_bio={details?.user_bio}
      />
      <CreatedCourses
        results={details?.results}
        user_name={details?.user_name}
        count={details?.count}
      />
    </div>
  );
};

export default Profile;

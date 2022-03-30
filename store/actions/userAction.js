import axios from "axios";
import Cookies from "js-cookie";

export const userCourse = (name) => async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    };

    const form = {
      creater: name,
    };

    const res = await axios.post(
      "http://data.revizify.com/api/v1/courses/user_course",
      form,
      { headers }
    );

    console.log(res);

    dispatch({ type: "USER_COURSE", payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

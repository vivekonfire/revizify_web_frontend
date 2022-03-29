import Cookies from "js-cookie";
import axios from "axios";

export const createCard = (form) => async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    };

    await axios.post(
      "http://data.revizify.com/api/v1/courses/create_card",
      form,
      { headers }
    );

    // dispatch(getCourses());
  } catch (err) {
    console.error(err);
  }
};

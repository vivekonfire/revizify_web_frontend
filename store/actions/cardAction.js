import Cookies from "js-cookie";
import axios from "axios";
import { resetPassword } from "./authActions";

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

    dispatch(getCard());
  } catch (err) {
    console.error(err);
  }
};

export const getCard = (form) => async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    };

    const res = await axios.post(
      "http://data.revizify.com/api/v1/courses/create_card",
      form,
      { headers }
    );

    dispatch({ type: "GET_CARDS", payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

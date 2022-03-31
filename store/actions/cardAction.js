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

    dispatch(getCard());
  } catch (err) {
    console.error(err);
  }
};

export const getCards = (form) => async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    };

    const res = await axios.post(
      "http://data.revizify.com/api/v1/courses/fetch_deck",
      form,
      { headers }
    );

    console.log(res);

    dispatch({ type: "GET_CARDS", payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

export const deckStatus = (id) => async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    };

    const form = {
      course_id: id,
    };

    const res = await axios.post(
      "http://data.revizify.com/api/v1/courses/revision_count",
      form,
      { headers }
    );

    dispatch({ type: "DECK_STATUS", payload: res.data });
  } catch (error) {}
};

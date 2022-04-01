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

    if (res.status === 200) {
      const formdata = {
        course_id: form.course_id,
        card_id: res?.data?.results[0]?.card_id,
      };

      console.log(formdata);

      dispatch(getCard(formdata));
    }

    dispatch({ type: "GET_CARDS", payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

export const readCard = (form) => async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    };

    await axios.post(
      "http://data.revizify.com/api/v1/courses/read_card",
      form,
      { headers }
    );

    // const data = {
    //   course_id: form.course_id,
    //   deck_status: deckStatus,
    // };

    // dispatch(getCards(data));
  } catch (error) {
    console.error(error);
  }
};

export const deleteCard = (course_id, data) => async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    };

    const res = await axios.delete(
      "http://data.revizify.com/api/v1/courses/create_card",
      {
        headers,
        data,
      }
    );

    console.log(res);

    const form = {
      course_id: course_id,
      card_id: data.card_id,
    };

    dispatch(getCard(form));
  } catch (error) {
    console.error(error);
  }
};

export const updateCard = (form) => async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    };

    await axios.patch(
      "http://data.revizify.com/api/v1/courses/create_card",
      form,
      { headers }
    );

    const data = {
      course_id: form.course_id,
      card_id: form.card_id,
    };

    dispatch(getCard(data));
  } catch (error) {
    console.error(error);
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
      "http://data.revizify.com/api/v1/courses/fetch_deck",
      form,
      { headers }
    );

    dispatch({ type: "GET_CARD", payload: res.data });
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

export const setBookmark = (form) => async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    };

    await axios.post("http://data.revizify.com/api/v1/courses/bookmark", form, {
      headers,
    });

    dispatch(getBookmark(form.course_id, form.card_id));
  } catch (error) {}
};

export const getBookmark = (course_id, card_id) => async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    };

    const res = await axios.get(
      `http://data.revizify.com/api/v1/courses/bookmark?course_id=${course_id}&card_id=${card_id}`,
      { headers }
    );

    dispatch({ type: "BOOKMARK", payload: res.data });
  } catch (error) {}
};

export const deleteBookmark = (data) => async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    };

    await axios.delete("http://data.revizify.com/api/v1/courses/bookmark", {
      headers,
      data,
    });

    dispatch(getBookmark(data.course_id, data.card_id));
  } catch (error) {}
};

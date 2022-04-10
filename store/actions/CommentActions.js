import axios from "axios";
import Cookies from "js-cookie";

export const postComment = (form) => async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const headers = {
      "Content-Type": "Application/json",
      Authorization: `JWT ${token}`,
    };

    await axios.post("http://data.revizify.com/api/v1/courses/comment", form, {
      headers,
    });

    dispatch(getComments(form.course_id));
  } catch (error) {
    console.error(error);
  }
};

export const postReply = (form) => async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const headers = {
      "Content-Type": "Application/json",
      Authorization: `JWT ${token}`,
    };

    await axios.post("http://data.revizify.com/api/v1/courses/comment", form, {
      headers,
    });

    dispatch(getReplys(form.course_id, form.parent_id));
  } catch (error) {
    console.error(error);
  }
};

export const getComments = (course_id) => async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const config = {
      headers: {
        "Content-Type": "Application/json",
        Authorization: `JWT ${token}`,
      },
      params: {
        course_id: course_id,
      },
    };

    const res = await axios.get(
      "http://data.revizify.com/api/v1/courses/comment",
      config
    );

    dispatch({ type: "GET_COMMENTS", payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

export const getReplys = (course_id, parent_id) => async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const config = {
      headers: {
        "Content-Type": "Application/json",
        Authorization: `JWT ${token}`,
      },
      params: {
        course_id: course_id,
        parent_id: parent_id,
      },
    };

    const res = await axios.get(
      "http://data.revizify.com/api/v1/courses/comment",
      config
    );

    dispatch({ type: "GET_REPLYS", payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

import Cookies from "js-cookie";
import axios from "axios";

export const addCourse = (form) => async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    };

    await axios.post(
      "http://data.revizify.com/api/v1/courses/create_course",
      form,
      { headers }
    );

    dispatch(getCourses());
  } catch (err) {
    console.error(err);
  }
};

export const getCourses = () => async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    };

    const res = await axios.get(
      "http://data.revizify.com/api/v1/courses/create_course",
      { headers }
    );

    dispatch({ type: "GET_COURSES", payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const getCourse = (id) => async (dispatch) => {
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
      "http://data.revizify.com/api/v1/courses/eachCourse",
      form,
      { headers }
    );

    dispatch({ type: "GET_COURSE", payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

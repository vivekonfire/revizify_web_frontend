import Cookies from "js-cookie";
import axios from "axios";
import { useSelector } from "react-redux";
import authreducer from "../reducers/authReducers";

const baseURL = "https://data.revizify.com/api/v1/"


// const baseURL = useSelector((state) => state.auth.baseURL);

export const addCourse = (form) => async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    };

    await axios.post(
      `${baseURL}courses/create_course`,
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
      `${baseURL}courses/create_course`,
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
      `${baseURL}courses/eachCourse`,
      form,
      { headers }
    );

    dispatch({ type: "GET_COURSE", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_COURSE_ERROR", payload: err.response.data });
  }
};

export const archiveCourse = (id) => async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    };

    const data = {
      course_id: id,
    };

    const res = await axios.delete(
      `${baseURL}courses/create_course`,
      { headers, data }
    );

    dispatch(getCourses());
  } catch (error) {
    console.error(error);
  }
};

export const editCourse = (form) => async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    };

    await axios.patch(
      `${baseURL}courses/create_course`,
      form,
      { headers }
    );

    dispatch(getCourses());
  } catch (err) {
    console.error(err);
  }
};

export const getLikeCourse = (id) => async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      },
      params: {
        course_id: id,
      },
    };

    const res = await axios.get(
      `${baseURL}courses/like`,
      config
    );

    dispatch({ type: "LIKE", payload: res.data.like });
  } catch (error) {
    console.error(error);
  }
};

export const likeCourse = (id) => async (dispatch) => {
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
      `${baseURL}courses/like`,
      form,
      { headers }
    );

    // dispatch(getCourses());
  } catch (error) {
    console.error(error);
  }
};

export const removeLikeCourse = (id) => async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    };

    const data = {
      course_id: id,
    };

    const res = await axios.delete(
      `${baseURL}courses/like`,

      { headers, data }
    );

    // dispatch(getCourses());
  } catch (error) {
    console.error(error);
  }
};

export const downloadCourse = (form) => async () => {
  try {
    const token = Cookies.get("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    };

    await axios.post(
      `${baseURL}courses/download_course`,
      form,
      { headers }
    );
  } catch (err) {
    console.error(err);
  }
};

export const getDownloadedCourses = () => async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    };

    const res = await axios.get(
      `${baseURL}courses/download_course`,
      { headers }
    );

    dispatch({ type: "GET_DOWNLOAD_COURSES", payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const deleteDownloadCourses = (id) => async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    };

    const data = {
      course_id: id,
    };

    await axios.delete(
      `${baseURL}courses/download_course`,
      { headers, data }
    );

    dispatch(getDownloadedCourses());
  } catch (err) {
    console.error(err);
  }
};

export const exploreCourse = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${baseURL}courses/explore_course`
    );

    dispatch({ type: "EXPLORE_COURSE", payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

export const getArchivedCourses = () => async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    };

    const res = await axios.get(
      `${baseURL}courses/archive_course`,
      { headers }
    );

    dispatch({ type: "GET_ARCHIVE_COURSES", payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const restoreArchiveCourses = (id) => async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    };

    const data = {
      course_id: id,
    };

    await axios.put(
      `${baseURL}courses/archive_course`,
      data,
      { headers }
    );

    dispatch(getArchivedCourses());
  } catch (err) {
    console.error(err);
  }
};

export const clearCourse = () => async (dispatch) => {
  dispatch({ type: "CLEAR_COURSE" });
};

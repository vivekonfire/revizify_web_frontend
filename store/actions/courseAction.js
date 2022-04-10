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
      "http://data.revizify.com/api/v1/courses/create_course",
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
      "http://data.revizify.com/api/v1/courses/create_course",
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
      "http://data.revizify.com/api/v1/courses/like",
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
      "http://data.revizify.com/api/v1/courses/like",
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
      "http://data.revizify.com/api/v1/courses/like",

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
      "http://data.revizify.com/api/v1/courses/download_course",
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
      "http://data.revizify.com/api/v1/courses/download_course",
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
      "http://data.revizify.com/api/v1/courses/download_course",
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
      "http://data.revizify.com/api/v1/courses/explore_course"
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
      "http://data.revizify.com/api/v1/courses/archive_course",
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
      "http://data.revizify.com/api/v1/courses/archive_course",
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

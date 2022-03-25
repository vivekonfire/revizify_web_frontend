import axios from "axios";
import Cookies from "js-cookie";

export const registerAction = (form) => async (dispatch) => {
  try {
    const headers = {
      "Content-Type": "Application/json",
    };

    const res = await axios.post(
      `http://data.revizify.com/api/v1/user/signup`,
      form,
      { headers }
    );

    Cookies.set("token", res.data.at);
    Cookies.set("refreshToken", res.data.rt);

    dispatch({ type: "REGISTER", payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const loginAction = (form) => async (dispatch) => {
  try {
    const headers = {
      "Content-Type": "Application/json",
    };
    console.log(form);
    const res = await axios.post(
      `http://data.revizify.com/api/v1/user/login`,
      form,
      { headers }
    );

    Cookies.set("token", res.data.at);
    Cookies.set("refreshToken", res.data.rt);

    dispatch({ type: "LOGIN", payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const checkUser = (form) => async (dispatch) => {
  try {
    const headers = {
      "Content-Type": "Application/json",
    };

    const res = await axios.post(
      `http://data.revizify.com/api/v1/user/check_user`,
      form,
      { headers }
    );

    if (res.data.is_existing)
      dispatch({ type: "CHECK_USER_EXISTING", payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

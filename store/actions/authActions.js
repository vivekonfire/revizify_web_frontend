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

export const validateToken = (rtoken, token) => async (dispatch) => {
  try {
    const headers = {
      "Content-Type": "Application/json",
    };

    const form = {
      token: token,
    };

    const res = await axios.post(
      `http://data.revizify.com/api/v1/user/token/verify`,
      form,
      { headers }
    );

    if (Object.keys(res.data).length === 0)
      dispatch({ type: "VALIDATE_TOKEN" });
    else {
      dispatch({ type: "ERROR_VALIDATE" });
      dispatch(refreshToken(rtoken));
    }
  } catch (err) {
    console.error(err);
  }
};

export const refreshToken = (token) => async (dispatch) => {
  try {
    const headers = {
      "Content-Type": "Application/json",
    };

    const form = {
      refresh: token,
    };

    const res = await axios.post(
      `http://data.revizify.com/api/v1/user/token/refresh`,
      form,
      { headers }
    );

    if (res.data.refresh !== null)
      dispatch({ type: "REFRESH_TOKEN", payload: res.data });
    else {
      dispatch(logout);
    }
  } catch (err) {
    console.error(err);
  }
};

export const logout = () => (dispatch) => {
  try {
    Cookies.remove("token");
    Cookies.remove("refreshToken");

    dispatch({ type: "LOGOUT" });
  } catch (err) {
    console.error(err);
  }
};

export const changePassword = (form) => async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const headers = {
      "Content-Type": "Application/json",
      Authorization: `JWT ${token}`,
    };

    const res = await axios.put(
      `http://data.revizify.com/api/v1/user/change_password`,
      form,
      { headers }
    );

    if (res.status === 200) {
    }
  } catch (err) {
    console.error(err);
  }
};

export const verifyEducator = (form) => async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const headers = {
      "Content-Type": "Application/json",
      Authorization: `JWT ${token}`,
    };

    const res = await axios.post(
      `http://data.revizify.com/api/v1/user/verify_form`,
      form,
      { headers }
    );

    console.log(res);
  } catch (err) {
    console.error(err);
  }
};

export const passwordValidaor = (form) => async (dispatch) => {
  try {
    const headers = {
      "Content-Type": "Application/json",
    };

    const res = await axios.post(
      `http://data.revizify.com/api/v1/user/password_validity`,
      form,
      { headers }
    );

    dispatch({ type: "PASSWORD_VALIDITY", payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const usernameValidaor = (form) => async (dispatch) => {
  try {
    const headers = {
      "Content-Type": "Application/json",
    };

    const res = await axios.post(
      `http://data.revizify.com/api/v1/user/username_validity`,
      form,
      { headers }
    );

    dispatch({ type: "USERNAME_VALIDITY", payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const resetPasswordEmail = (form) => async (dispatch) => {
  try {
    const headers = {
      "Content-Type": "Application/json",
    };

    const res = await axios.post(
      `http://data.revizify.com/api/v1/user/password_reset/`,
      form,
      { headers }
    );

    console.log(res);
  } catch (err) {
    console.error(err);
  }
};

export const resetPassword = (form) => async (dispatch) => {
  try {
    const headers = {
      "Content-Type": "Application/json",
    };

    const res = await axios.post(
      `http://data.revizify.com/api/v1/user/password_reset/confirm/`,
      form,
      { headers }
    );

    console.log(res);
  } catch (err) {
    console.error(err);
  }
};

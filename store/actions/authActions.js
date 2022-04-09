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
    Cookies.set("userName", res.data.user_name);
    Cookies.set("name", res.data.name);
    Cookies.set("email", res.data.email);

    dispatch({ type: "REGISTER", payload: res.data });
  } catch (err) {
    dispatch({ type: "REGISTER_ERROR", payload: err.response.data });
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
    Cookies.set("userName", res.data.user_name);
    Cookies.set("name", res.data.name);
    Cookies.set("email", res.data.email);

    dispatch({ type: "LOGIN", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_ERROR", payload: err.response.data });
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

    if (res.data.is_existing) {
      Cookies.set("email", res.data.email);
      Cookies.set("userName", res.data.user_name);
      dispatch({ type: "CHECK_USER_EXISTING", payload: res.data });
    }
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

    const data = {
      token: token,
      rtoken: rtoken,
    };

    if (Object.keys(res.data).length === 0) {
      dispatch({ type: "VALIDATE_TOKEN", payload: data });
    } else {
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
    Cookies.remove("userName");
    Cookies.remove("name");
    Cookies.remove("email");

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

    await axios.put(
      `http://data.revizify.com/api/v1/user/change_password`,
      form,
      { headers }
    );

    dispatch({ type: "CHANGE_PASSWORD_SUCCESS" });
  } catch (err) {
    dispatch({ type: "CHANGE_PASSWORD_ERROR", payload: err.response.data });
  }
};

export const verifyEducator = (form) => async () => {
  try {
    const token = Cookies.get("token");

    const headers = {
      "Content-Type": "Application/json",
      Authorization: `JWT ${token}`,
    };

    await axios.post(`http://data.revizify.com/api/v1/user/verify_form`, form, {
      headers,
    });
  } catch (err) {
    console.error(err);
  }
};

export const passwordValidator = (password) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "Application/json",
      },
      params: {
        password: password,
      },
    };

    const res = await axios.get(
      `http://data.revizify.com/api/v1/user/password_validity`,
      config
    );

    dispatch({
      type: "PASSWORD_VALIDITY",
      payload: { message: res.data.message, status: res.status },
    });
  } catch (err) {
    dispatch({
      type: "PASSWORD_VALIDITY",
      payload: {
        message: err.response.data.password,
        status: err.response.status,
      },
    });
  }
};

export const usernameValidator = (user_name) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "Application/json",
      },
      params: {
        user_name: user_name,
      },
    };

    const res = await axios.get(
      `http://data.revizify.com/api/v1/user/username_validity`,
      config
    );

    dispatch({
      type: "USERNAME_VALIDITY",
      payload: { message: res.data.message, status: res.status },
    });
  } catch (err) {
    dispatch({
      type: "USERNAME_VALIDITY",
      payload: {
        message: err.response.data.user_name,
        status: err.response.status,
      },
    });
  }
};

export const resetPasswordEmail = (form) => async () => {
  try {
    const headers = {
      "Content-Type": "Application/json",
    };

    await axios.post(
      `http://data.revizify.com/api/v1/user/password_reset/`,
      form,
      { headers }
    );
  } catch (err) {
    console.error(err);
  }
};

export const resetPassword = (form) => async () => {
  try {
    const headers = {
      "Content-Type": "Application/json",
    };

    const res = await axios.post(
      `http://data.revizify.com/api/v1/user/password_reset/confirm/`,
      form,
      { headers }
    );
  } catch (err) {
    console.error(err);
  }
};

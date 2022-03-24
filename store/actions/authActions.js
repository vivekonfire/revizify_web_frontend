import axios from "axios";
import { REGISTER } from "../types";

export const registerAction = (form) => async (dispatch) => {
  try {
    const headers = {
      "Content-Type": "Application/json",
    };

    const res = await axios.post(
      `http://data.revizify.com/api/v1/user/signup`,
      form
    );

    dispatch({ type: REGISTER, data: res });
  } catch (err) {
    console.error(err);
  }
};

export const checkUser = (form) => async (dispatch) => {
  try {
    const headers = {
      ContentType: "Application/json",
    };

    const res = await axios.post(
      `http://data.revizify.com/api/v1/user/check_user`,
      form
    );

    dispatch({ type: REGISTER, data: res });
  } catch (err) {
    console.error(err);
  }
};

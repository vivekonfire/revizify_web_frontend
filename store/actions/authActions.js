import axios from "axios";
import { LOGIN } from "../types";

export const registerAction = (form) => async (dispatch) => {
  try {
    const headers = {
      ContentType: "Application/json",
    };
    // console.log(process.env.URL);
    const res = await axios.post(
      "http://data.revizify.com/api/v1/user/signup",
      form,
      { headers }
    );
    console.log(res);
    // dispatch({ type: LOGIN, data: res });
  } catch (err) {
    console.error(err);
  }
};

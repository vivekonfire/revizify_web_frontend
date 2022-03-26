// import { REGISTER, CHECK_USER_EXISTING } from "../types";

const initialState = {
  validity_password: "",
  validity_username: "",
  valid_token: false,
  user_exist: false,
  token: null,
  refreshToken: null,
  user: {
    name: null,
    email: null,
    phone_number: null,
  },
};

const authreducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        token: action.payload.at,
        refreshToken: action.payload.rt,
        valid_token: true,
        user: {
          name: action.payload.name,
          email: action.payload.email,
          phone_number: action.payload.phone_number,
        },
      };
    case "LOGIN":
      return {
        ...state,
        token: action.payload.at,
        refreshToken: action.payload.rt,
        valid_token: true,
        user: {
          name: action.payload.name,
          email: action.payload.email,
          phone_number: action.payload.phone_number,
        },
      };
    case "CHECK_USER_EXISTING":
      return {
        ...state,
        user_exist: true,
        user: {
          name: action.payload.user_name,
          email: action.payload.email,
        },
      };
    case "VALIDATE_TOKEN":
      return {
        ...state,
        valid_token: true,
      };
    case "ERROR_VALIDATE":
      return {
        ...state,
        valid_token: false,
        token: null,
      };
    case "REFRESH_TOKEN":
      return {
        ...state,
        valid_token: true,
        token: action.payload.access,
        refreshToken: action.payload.refresh,
      };
    case "LOGOUT":
      return {
        ...state,
        token: null,
        valid_token: false,
        refreshToken: null,
      };
    case "PASSWORD_VALIDITY":
      return {
        ...state,
        validity_password: action.payload.message,
      };
    case "USERNAME_VALIDITY":
      return {
        ...state,
        username_password: action.payload.message,
      };
    default:
      return state;
  }
};

export default authreducer;

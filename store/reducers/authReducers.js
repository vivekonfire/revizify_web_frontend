// import { REGISTER, CHECK_USER_EXISTING } from "../types";

const initialState = {
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
        user: {
          name: action.payload.name,
          email: action.payload.email,
          phone_number: action.payload.phone_number,
        },
      };
    case "LOGIN":
      console.log(action.payload);
      return {
        ...state,
        token: action.payload.at,
        refreshToken: action.payload.rt,
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
    default:
      return state;
  }
};

export default authreducer;

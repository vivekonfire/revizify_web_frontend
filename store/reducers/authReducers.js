import { LOGIN } from "../types";

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.data.at,
        refreshToken: action.data.rt,
        user: {
          name: action.data.name,
          email: action.data.email,
          phone_number: action.data.phone_number,
        },
      };
    case CHECK_USER_EXISTING:
      return {
        ...state,
        user_exist: true,
        user: {
          name: action.data.user_name,
          email: action.data.email,
        },
      };
    default:
      return state;
  }
};

export default reducer;
